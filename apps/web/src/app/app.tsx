import { Toast, RequireAuth } from '@vegangouda/web/design-system';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '@vegangouda/web/feature-auth';
// import { WebDesignSystem } from '@vegangouda/web/design-system';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <div>dash</div>
            </RequireAuth>
          }
        />
      </Routes>

      {/* END: routes */}
      <Toast />
    </>
  );
}

export default App;
