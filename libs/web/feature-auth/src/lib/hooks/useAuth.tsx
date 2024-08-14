import { useAuthContext } from '@vegangouda/web/design-system';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@vegangouda/web/design-system';
import { Prisma, user } from '@prisma/client';
import { userResolver } from '@vegangouda/web/data-access';
import { userPaths } from '@vegangouda/shared/types';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';

export const useAuth = () => {
  const { setIsAuthenticated } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useToast();

  const { data: allUsers, isLoading: allUsersLoading } = useQuery({
    queryKey: userPaths.getAllUsers.queryKey,
    queryFn: userResolver.getAllUsers,
  });

  const useLogin = useMutation<
    { user: user; token: string },
    Error,
    { email: string; password: string }
  >({
    mutationKey: userPaths.loginWithEmail.queryKey,
    mutationFn: userResolver.loginWithEmail,
    onError: (error) => {
      showErrorToast(error?.message || 'An error occurred. Please try again.');
    },
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.token);
      setIsAuthenticated(true);
      navigate(state?.from ? state.from : '/');
      showSuccessToast('Logged in successfully');
    },
  });

  const useCreateUser = useMutation<user, Error, Prisma.userCreateInput>({
    mutationKey: userPaths.createUser.queryKey,
    mutationFn: userResolver.createUser,
    onError: (error) => {
      showErrorToast(error?.message || 'An error occurred. Please try again.');
    },
    onSuccess: (data, input) => {
      showSuccessToast('User created successfully');

      console.log('data', data);
      useLogin.mutate({
        email: data.email,
        password: input.password,
      });
      navigate('/');
    },
  });

  // add additional hooks here
  const queryLoading = useMemo(() => allUsersLoading, [allUsersLoading]);

  return {
    useLogin,
    queryLoading,
    allUsers,
    useCreateUser,
  };
};
