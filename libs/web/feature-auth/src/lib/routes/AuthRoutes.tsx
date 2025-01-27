import { Routes, Route } from 'react-router-dom';
import { RegisterPage, LoginPage } from '../pages';
import { LayoutContainer } from '@vegangouda/web/design-system';

export const AuthRoutes = () => {
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
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </LayoutContainer>
  );
};
