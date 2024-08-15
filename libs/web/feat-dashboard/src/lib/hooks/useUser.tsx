import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { useAuthContext } from '@vegangouda/web/design-system';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@vegangouda/web/design-system';
import { Prisma, user } from '@prisma/client';
import { userResolver } from '@vegangouda/web/data-access';
import { userPaths } from '@vegangouda/shared/types';
import { useEffect, useMemo } from 'react';

export const useDashboard = () => {
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

  // add additional hooks here
  const queryLoading = useMemo(() => allUsersLoading, [allUsersLoading]);

  return {
    allUsers,
    queryLoading,
  };
};
