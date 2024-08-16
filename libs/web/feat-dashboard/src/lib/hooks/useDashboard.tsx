import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext, useToast } from '@vegangouda/web/design-system';
import { user } from '@prisma/client';
import { userResolver } from '@vegangouda/web/data-access';
import { userPaths } from '@vegangouda/shared/types';
import { useEffect, useMemo } from 'react';

export const useDashboard = () => {
  const queryClient = useQueryClient();
  const { showErrorToast, showSuccessToast } = useToast();
  const { user } = useAuthContext();

  const isAdmin = useMemo(() => user?.role === 'ADMIN', [user]);

  const {
    data: allUsers,
    isLoading: allUsersLoading,
    error: allUsersError,
  } = useQuery({
    queryKey: userPaths.getAllUsers.queryKey,
    queryFn: userResolver.getAllUsers,
    enabled: isAdmin,
  });

  useEffect(() => {
    if (allUsersError) {
      showErrorToast(
        allUsersError?.message || 'An error occurred. Please try again.'
      );
    }
  }, [allUsersError]);

  const updateUserRole = useMutation<
    Omit<user, 'password'>,
    Error,
    { user_id: user['user_id']; role: user['role'] }
  >({
    mutationKey: userPaths.updateUserRole.queryKey,
    mutationFn: userResolver.updateUserRole,
    onError: (error) => {
      showErrorToast(error?.message || 'An error occurred. Please try again.');
    },
    onSuccess: (data) => {
      showSuccessToast('User role updated successfully');

      queryClient.setQueryData<Omit<user, 'password'>[]>(
        userPaths.getAllUsers.queryKey,
        (oldData) => {
          if (oldData) {
            const userIndex = oldData.findIndex(
              (u) => u.user_id === data.user_id
            );
            if (userIndex !== -1) {
              oldData[userIndex] = data;
            }
            return oldData;
          }
          return [];
        }
      );
    },
  });

  // add additional hooks here
  const queryLoading = useMemo(() => allUsersLoading, [allUsersLoading]);
  const queryError = useMemo(() => allUsersError, [allUsersError]);

  return {
    allUsers,
    queryLoading,
    queryError,
    updateUserRole,
  };
};
