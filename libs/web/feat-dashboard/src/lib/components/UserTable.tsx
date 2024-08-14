import { DataGrid, DataGridProps } from '@vegangouda/web/design-system';
import { user } from '@prisma/client';

export interface UserTableProps {
  users: Omit<user, 'password'>[];
}

export const UserTable = ({ users }: UserTableProps) => {
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
        renderCell: () => <button>View</button>,
      },
    ],

    rows: users,
  };
  return <DataGrid {...props} />;
};
