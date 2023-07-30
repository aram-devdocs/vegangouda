// take the nav bar and put it in the layout wrapper that will be used to set the style and background color of the page

import { NavBar } from './NavBar';
import { Box } from '@vegangouda/web/design-system';


export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5',
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '16px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
