import React, { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { FuncProviderProps } from '../constants';
export function RequireAuth({ children }: FuncProviderProps) {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: '/auth/login',
      }}
      replace
      state={{ path: location.pathname }}
    />
  );
}
