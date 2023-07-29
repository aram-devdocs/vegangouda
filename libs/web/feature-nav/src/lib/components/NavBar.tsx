import { Box } from '@vegangouda/web/design-system';
import { useAuthContext } from '@vegangouda/web/context';
import { NavButton, NavButtonProps } from './NavButton';
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
  const { isAuthenticated, logout } = useAuthContext();

  const location = useLocation();

  const buttons: NavButtonProps[] = [
    {
      label: 'Home',
      disabled: !isAuthenticated || location.pathname === '/',
      to: '/',
    },
  ];

  if (isAuthenticated) {
    buttons.push({
      label: 'Logout',
      to: '/',
      onClick: logout,
    });
  }

  if (!isAuthenticated && location.pathname !== '/login') {
    buttons.push({
      label: 'Login',
      to: '/login',
    });
  }

  if (!isAuthenticated && location.pathname !== '/register') {
    buttons.push({
      label: 'Register',
      to: '/register',
    });
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        borderBottom: '1px solid #ccc',
      }}
    >
      {buttons.map((button) => (
        <NavButton key={button.label} {...button} />
      ))}
    </Box>
  );
};
