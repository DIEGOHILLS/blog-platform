import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { apiService, type AuthResponse } from "../services/apiService";

interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (auth: AuthResponse) => void;
  register: (auth: AuthResponse) => void;
  logout: () => void;
  token: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

<<<<<<< HEAD
    useEffect(() => {
=======
  useEffect(() => {
>>>>>>> 058fa5bfa17d8c05522b85b067b2bbbfbbec1710
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
<<<<<<< HEAD
=======

>>>>>>> 058fa5bfa17d8c05522b85b067b2bbbfbbec1710
    } else {
      setIsAuthenticated(false);
      setToken(null);
      setUser(null);
    }
  }, []);

  const login = useCallback((auth: AuthResponse) => {
    localStorage.setItem("token", auth.token);
    setToken(auth.token);
    setIsAuthenticated(true);
  }, []);

  const register = useCallback((auth: AuthResponse) => {
    localStorage.setItem("token", auth.token);
    setToken(auth.token);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    apiService.logout();
  }, []);

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    register,
    logout,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export default AuthContext;
