import React, { createContext, useContext, useState } from 'react';

// Create a Context for Auth
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isAdmin: false,
  });

  // Example functions to update auth state
  const login = (admin) => setAuthState({ isAuthenticated: true, isAdmin: admin });
  const logout = () => setAuthState({ isAuthenticated: false, isAdmin: false });

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using Auth
export const useAuth = () => useContext(AuthContext);
