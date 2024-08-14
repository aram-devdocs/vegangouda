import React, { createContext, useEffect, useState } from 'react';
import { _axios } from '@vegangouda/web/data-access';

import { FuncProviderProps, baseURL, defaultTimeout } from '../constants';
import { PageLoader } from '@vegangouda/web/shared-components';
import { userResolver } from '@vegangouda/web/data-access';
import { user } from '@prisma/client';
interface AuthContextProps {
  login: (
    email: string,
    password: string
  ) => Promise<{
    user: user;
    token: string;
  } | null>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  login: async () => {
    return null;
  },
  logout: () => Promise.resolve(),
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: FuncProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const validateToken = async (token: string) => {
    _axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
      // post /user/me to get fresh token
      await _axios.post('/user/me', { token });
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
    // axios.defaults.baseURL = baseURL;
    // axios.defaults.timeout = defaultTimeout;

    const token = localStorage.getItem('access_token');
    if (token) {
      // Token exists, so check its validity
      validateToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<{
    user: user;
    token: string;
  } | null> => {
    const res = await userResolver
      .loginWithEmail({ email, password })
      .catch((error) => {
        console.log(error);
        setIsAuthenticated(false);
        throw error;
      });

    if (res) {
      localStorage.setItem('access_token', res.token);
      setIsAuthenticated(true);
    }

    return res || null;
  };

  const logout = async () => {
    try {
      // Remove the token from local storage
      localStorage.removeItem('access_token');

      // Set authenticated to false
      setIsAuthenticated(false);
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
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
