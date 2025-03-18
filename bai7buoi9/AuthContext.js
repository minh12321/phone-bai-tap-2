import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "minh12371@gmail.com" && password === "123456") {
      setUser({ name: "Cao Minh", email });
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};