import { createContext, useState, useEffect } from "react";
import * as authService from "../services/AuthServices";
import { useAlert } from "./AlertContext";
import api from "../services/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { showAlert } = useAlert();
  const [User, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("access_token");

    // ❌ No token → logged out
    if (!token || !storedUser) {
      setUser(null);
      return;
    }

    const checkSession = async () => {
      try {
        const res = await api.get("/check-session/");
        setUser(res.data.user);
      } catch {
        authService.logout();
        setUser(null);
      }
    };

    checkSession();

    // ✅ Valid session
    setUser(JSON.parse(storedUser));
  }, []);
  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      setUser(response.user);
      return response;
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    return true;
  };

  const IsAuthenticated = !!User;

  return (
    <AuthContext.Provider value={{ User, login, logout, IsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
