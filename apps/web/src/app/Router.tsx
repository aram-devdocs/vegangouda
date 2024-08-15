import { RequireAuth } from '@vegangouda/web/design-system';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '@vegangouda/web/feature-auth';
import { DashboardRoutes } from '@vegangouda/web/feat-dashboard';
// import { WebDesignSystem } from '@vegangouda/web/design-system';
import { useNavigate } from 'react-router-dom';

export function Router() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <DashboardRoutes />
            </RequireAuth>
          }
        />

        <Route
          path="*"
          element={
            <RequireAuth>
              <div>404 - No Page Found</div>
              <button
                onClick={() => {
                  localStorage.removeItem('access_token');
                  navigate('/auth/login');
                  window.location.reload();
                }}
              >
                Login
              </button>
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}
