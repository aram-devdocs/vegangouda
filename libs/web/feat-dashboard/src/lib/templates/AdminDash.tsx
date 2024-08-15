import { UserTable } from '../components';
import { Typography, Box } from '@vegangouda/web/design-system';
import { user } from '@prisma/client';

interface AdminDashProps {
  users: Omit<user, 'password'>[];
}

export const AdminDash = ({ users }: AdminDashProps) => {
  return (
    <Box>
      <Typography>Admin Dashboard</Typography>
      <UserTable users={users} />
    </Box>
  );
};
