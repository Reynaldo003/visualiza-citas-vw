// src/auth/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { getStoredUser, getAccessToken, clearJwtTokens } from "../lib/apiClient";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Solo lee la sesión que el CRM ya dejó guardada en localStorage.
    const storedUser = getStoredUser();
    const token = getAccessToken();

    if (storedUser && token) {
      setUser(storedUser);
    } else {
      setUser(null);
    }

    setLoading(false);
  }, []);

  const logout = () => {
    clearJwtTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}