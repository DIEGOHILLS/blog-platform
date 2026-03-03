const STORAGE_KEY = "theme"; // "light" | "dark"

export type ThemeMode = "light" | "dark";

export function getInitialTheme(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  if (stored === "light" || stored === "dark") return stored;

  // default to system preference
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export function applyTheme(theme: ThemeMode) {
  const root = document.documentElement; // <html>
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");

  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme(current: ThemeMode): ThemeMode {
  const next: ThemeMode = current === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}