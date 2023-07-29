import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FuncProviderProps } from './types';
import { useToast } from './ToastProvider';

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
  const checkIfLoggedIn = () => {
    const token = localStorage.getItem('access_token');
    console.log('token', token);
    if (token) {
      // post /user/me to get fresh token
      axios
        .post('/user/me', {
          token,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('access_token', response.data.token);
          return true;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem('access_token');
          return false;
        });
    }

    return false;
  };

  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem('access_token') ? checkIfLoggedIn() : false
  );

  // Set axios defaults
  useEffect(() => {
    axios.defaults.baseURL =
      process.env.NODE_ENV === 'production'
        ? 'https://vegan-gouda.herokuapp.com/'
        : 'http://localhost:3000';
    axios.defaults.timeout = 5000; // Set your desired timeout value in milliseconds

    // Check if user is logged in on app start
    checkIsLoggedIn();
  }, []);

  const checkIsLoggedIn = () => {
    // Retrieve token from local storage
    const token = localStorage.getItem('access_token');

    if (token) {
      // TODO: You can implement additional checks on the token, such as token expiration validation, etc.
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

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

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
