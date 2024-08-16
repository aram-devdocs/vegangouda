import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FuncProviderProps, baseURL, defaultTimeout } from '../constants';
import { PageLoader } from '@vegangouda/web/shared-components';
import { userResolver } from '@vegangouda/web/data-access';
import { user } from '@prisma/client';
interface AuthContextProps {
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: Omit<user, 'password'> | null;
  setUser: React.Dispatch<React.SetStateAction<Omit<user, 'password'> | null>>;
}

export const AuthContext = createContext<AuthContextProps>({
  logout: () => Promise.resolve(),
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: FuncProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<Omit<user, 'password'> | null>(null);

  const validateToken = async (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // TODO: Convert this to useQuery
    try {
      // post /user/me to get fresh token
      const res = await userResolver.me(token);
      setUser(res.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      localStorage.removeItem('access_token');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Set axios defaults
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = defaultTimeout;

    const token = localStorage.getItem('access_token');
    if (token) {
      // Token exists, so check its validity
      validateToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const logout = async () => {
    try {
      // Remove the token from local storage
      const token = localStorage.getItem('access_token');
      localStorage.removeItem('access_token');

      // Set authenticated to false
      setIsAuthenticated(false);
      setUser(null);
      userResolver.logout(token || '');
    } catch (error) {
      // Handle logout error here, show error message, etc.
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    // Show a loader while validating the token
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{ setIsAuthenticated, logout, isAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
