import React, { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './AuthProvider';
import { FuncProviderProps } from './types';
export function RequireAuth({ children }: FuncProviderProps) {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: '/login',
      }}
      replace
      state={{ path: location.pathname }}
    />
  );
}
