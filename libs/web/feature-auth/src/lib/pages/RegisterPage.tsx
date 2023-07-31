import { Register } from '../components/Register';
import { LayoutContainer } from '@vegangouda/web/design-system';

export const RegisterPage = () => {
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
      <Register />
    </LayoutContainer>
  );
};
