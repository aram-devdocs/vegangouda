import { LayoutContainer, Typography } from '@vegangouda/web/design-system';
import { Login } from '../components/Login';

export const LoginPage = () => {
  // how should I wrap the Login card on the page so that it is centered?
  // Follow MUI standards and best practices

  return (
    <LayoutContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // TODO: This should be a theme variable
      }}
    >
      <Login />
    </LayoutContainer>
  );
};
