import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate, useHref } from "react-router-dom";
import App from "./App";
import "./index.css";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function Providers() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <App />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers />
    </BrowserRouter>
  </React.StrictMode>
);