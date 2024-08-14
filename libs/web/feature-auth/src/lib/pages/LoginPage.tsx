import { LayoutContainer, Typography } from '@vegangouda/web/design-system';
import { Login } from '../templates';

export const LoginPage = () => {
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
