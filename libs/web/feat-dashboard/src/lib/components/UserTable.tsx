import { DataGrid, DataGridProps, Button } from '@vegangouda/web/design-system';
import { user } from '@prisma/client';
export interface UserTableProps {
  users: Omit<user, 'password'>[];
  updateUserRole: (input: {
    user_id: user['user_id'];
    role: user['role'];
  }) => void;
  isPending: boolean;
  loggedInUserId: user['user_id'];
}

export const UserTable = ({
  users,
  updateUserRole,
  isPending,
  loggedInUserId,
}: UserTableProps) => {
  const props: DataGridProps<Omit<user, 'password'>> = {
    columns: [
      { field: 'user_id', headerName: 'ID', width: 150 },
      { field: 'email', headerName: 'Email', width: 150 },
      { field: 'fname', headerName: 'First Name', width: 150 },
      { field: 'lname', headerName: 'Last Name', width: 150 },
      { field: 'mobile', headerName: 'Mobile', width: 150 },
      { field: 'created_at', headerName: 'Created At', width: 150 },
      { field: 'created_by', headerName: 'Created By', width: 150 },
      { field: 'updated_at', headerName: 'Updated At', width: 150 },
      { field: 'updated_by', headerName: 'Updated By', width: 150 },
      { field: 'archived', headerName: 'Archived', width: 150 },
      { field: 'archived_at', headerName: 'Archived At', width: 150 },
      { field: 'archived_by', headerName: 'Archived By', width: 150 },
      { field: 'role', headerName: 'Role', width: 150 },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (data) => {
          const isAdmin = data.row.role === 'ADMIN';
          return (
            <Button
              onClick={() =>
                updateUserRole({
                  user_id: data.row.user_id,
                  role: isAdmin ? 'USER' : 'ADMIN',
                })
              }
              label={`Update to ${isAdmin ? 'USER' : 'ADMIN'}`}
              loading={isPending}
              disabled={data.row.user_id === loggedInUserId}
            />
          );
        },
      },
    ],

    rows: users,

    sortModel: [
      {
        field: 'created_at',
        sort: 'desc',
      },
    ],
  };
  return <DataGrid {...props} />;
};
