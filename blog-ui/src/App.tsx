import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import EditPostPage from "./pages/EditPostPage";
import PostPage from "./pages/PostPage";
import CategoriesPage from "./pages/CategoriesPage";
import TagsPage from "./pages/TagsPage";
import DraftsPage from "./pages/DraftsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { AuthProvider, useAuth } from "./components/AuthContext";
import { ThemeProvider } from "./components/ThemeContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

function AppContent() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <>
      <NavBar
        isAuthenticated={isAuthenticated}
        userProfile={
          user
            ? {
                name: user.name,
                avatar: undefined,
              }
            : undefined
        }
        onLogout={logout}
      />

      <main className="container mx-auto py-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/posts/new"
            element={
              <ProtectedRoute>
                <EditPostPage />
              </ProtectedRoute>
            }
          />
          <Route path="/posts/:id" element={<PostPage isAuthenticated={isAuthenticated} />} />
          <Route
            path="/posts/:id/edit"
            element={
              <ProtectedRoute>
                <EditPostPage />
              </ProtectedRoute>
            }
          />

          <Route path="/categories" element={<CategoriesPage isAuthenticated={isAuthenticated} />} />
          <Route path="/tags" element={<TagsPage isAuthenticated={isAuthenticated} />} />

          <Route
            path="/posts/drafts"
            element={
              <ProtectedRoute>
                <DraftsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}