import { AdminDash, UserDash } from '../templates';
import { PageLoader } from '@vegangouda/web/shared-components';
import { useDashboard } from '../hooks';
import { useAuthContext } from '@vegangouda/web/design-system';
export const HomePage = () => {
  const { allUsers, queryLoading, queryError, updateUserRole } = useDashboard();
  const { user } = useAuthContext();

  if (queryLoading || !user) {
    return <PageLoader />;
  }

  if (queryError) {
    return <div>{queryError && queryError.message}</div>;
  }

  switch (user.role) {
    case 'ADMIN':
      return (
        <AdminDash
          users={allUsers || []}
          updateUserRole={updateUserRole.mutate}
          isPending={updateUserRole.isPending}
          loggedInUserId={user.user_id}
        />
      );
    case 'USER':
      return <UserDash />;
    default:
      return <div>Invalid role</div>;
  }
};
