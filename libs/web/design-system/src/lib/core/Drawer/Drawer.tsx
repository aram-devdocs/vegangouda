import MuiDrawer, { DrawerProps as MUIProps } from '@mui/material/Drawer';

export type DrawerProps = MUIProps

export const Drawer: React.FC<DrawerProps> = props => {
  return (
      <MuiDrawer
          {...props}
      >
          {props.children}
      </MuiDrawer>
  );
};
