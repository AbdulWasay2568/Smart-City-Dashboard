import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  userId: string | null;
  role: string | null;
  setUser: (id: string, role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const setUser = (id: string, userRole: string) => {
    setUserId(id);
    setRole(userRole);
  };

  const logout = () => {
    setUserId(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ userId, role, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
