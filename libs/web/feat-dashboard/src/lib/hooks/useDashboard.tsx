import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '@vegangouda/web/design-system';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@vegangouda/web/design-system';
import { Prisma, user } from '@prisma/client';
import { userResolver } from '@vegangouda/web/data-access';
import { userPaths } from '@vegangouda/shared/types';
import { useEffect, useMemo } from 'react';

export const useDashboard = () => {
  const queryClient = useQueryClient();
  const { showErrorToast, showSuccessToast } = useToast();

  const {
    data: allUsers,
    isLoading: allUsersLoading,
    error: allUsersError,
  } = useQuery({
    queryKey: userPaths.getAllUsers.queryKey,
    queryFn: userResolver.getAllUsers,
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
      queryClient.invalidateQueries({
        queryKey: userPaths.getAllUsers.queryKey,
      });
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
