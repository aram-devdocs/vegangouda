import { useAuthContext } from '@vegangouda/web/design-system';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@vegangouda/web/design-system';
import { Prisma, user } from '@prisma/client';
import { userResolver } from '@vegangouda/web/data-access';
import { userPaths } from '@vegangouda/shared/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAuth = () => {
  const { setIsAuthenticated, setUser } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useToast();
  const queryClient = useQueryClient();

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
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setIsAuthenticated(true);
      navigate(state?.from ? state.from : '/');
      showSuccessToast('Logged in successfully');
      setUser(data.user);
      queryClient.setQueryData<user[]>(
        userPaths.getAllUsers.queryKey,
        (oldData) => {
          if (oldData) {
            return [...oldData, data.user];
          }
          return [data.user];
        }
      );
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

      useLogin.mutate({
        email: data.email,
        password: input.password,
      });
      navigate('/');
      queryClient.setQueryData<user[]>(
        userPaths.getAllUsers.queryKey,
        (oldData) => {
          if (oldData) {
            return [...oldData, data];
          }
          return [data];
        }
      );
    },
  });

  return {
    useLogin,
    useCreateUser,
  };
};
