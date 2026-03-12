import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: unknown | null;
  login: (_data: unknown) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (_data: unknown) => {};
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
