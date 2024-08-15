import { UserTable } from '../components';
import { Typography, Box } from '@vegangouda/web/design-system';
import { user } from '@prisma/client';

interface AdminDashProps {
  users: Omit<user, 'password'>[];
  updateUserRole: (input: {
    user_id: user['user_id'];
    role: user['role'];
  }) => void;
  isPending: boolean;
  loggedInUserId: user['user_id'];
}

export const AdminDash = ({
  users,
  updateUserRole,
  isPending,
  loggedInUserId,
}: AdminDashProps) => {
  return (
    <Box>
      <Typography>Admin Dashboard</Typography>
      <UserTable
        users={users}
        updateUserRole={updateUserRole}
        isPending={isPending}
        loggedInUserId={loggedInUserId}
      />
    </Box>
  );
};
