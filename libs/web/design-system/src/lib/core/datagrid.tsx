import { DataGrid as DG, DataGridProps } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
export type { DataGridProps };

export const DataGrid = ({
  rows,
  pageSizeOptions = [10, 25, 50],
  paginationModel = { pageSize: 10, page: 0 },
  rowSelection = false,
  checkboxSelection = false,
  ...props
}: DataGridProps) => {
  const tableUUID = uuidv4();
  const rowsWithId = rows?.map((row, index) => {
    if (!row.id) {
      return { ...row, id: `${index}-${tableUUID}` };
    }
    return row;
  });

  return (
    <DG
      {...props}
      rows={rowsWithId}
      pageSizeOptions={pageSizeOptions}
      initialState={{
        pagination: {
          paginationModel,
        },
      }}
      rowSelection={rowSelection}
      checkboxSelection={checkboxSelection}
    />
  );
};
