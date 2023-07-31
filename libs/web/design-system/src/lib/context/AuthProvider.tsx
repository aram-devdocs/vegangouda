import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FuncProviderProps, baseURL, defaultTimeout } from '../constants';
import { PageLoader } from '@vegangouda/web/shared-components';
interface AuthContextProps {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: FuncProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const validateToken = async (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
      // post /user/me to get fresh token
      await axios.post('/user/me', { token });
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

  const login = async (email: string, password: string) => {
    try {
      // Call the API to get the access token
      const response = await axios.post('/user/loginWithEmail', {
        email,
        password,
      });

      console.log(response.data);

      // Save the token to local storage
      localStorage.setItem('access_token', response.data.token);

      // Set authenticated to true
      setIsAuthenticated(true);
    } catch (error) {
      // Handle login error here, show error message, etc.
      console.error('Login failed:', error);

      setIsAuthenticated(false);
      throw error;
    }
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
