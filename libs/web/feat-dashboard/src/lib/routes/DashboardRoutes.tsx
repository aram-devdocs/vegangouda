import { Routes, Route } from 'react-router-dom';
import { LayoutContainer } from '@vegangouda/web/design-system';
import { HomePage } from '../pages';

export const DashboardRoutes = () => {
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
        <Route path="/" element={<HomePage />} />
      </Routes>
    </LayoutContainer>
  );
};
