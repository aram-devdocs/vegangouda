import MuiGrid, { GridProps as MUIProps } from '@mui/material/Grid';
import { forwardRef } from 'react';

export type GridProps = MUIProps

export const Grid: React.FC<GridProps> = forwardRef((props, ref) => {
  return (
      <MuiGrid
        {...props}
        ref={ref}
      >
          {props.children}
      </MuiGrid>
  );
});
Grid.displayName = 'Grid'
