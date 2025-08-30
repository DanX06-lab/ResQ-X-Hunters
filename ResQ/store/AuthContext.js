import React, { createContext, useMemo, useState, useCallback } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const signIn = useCallback((nextUser, nextToken) => {
    setUser(nextUser);
    setToken(nextToken);
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    setToken(null);
  }, []);

  const value = useMemo(() => ({ user, token, signIn, signOut }), [user, token, signIn, signOut]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
