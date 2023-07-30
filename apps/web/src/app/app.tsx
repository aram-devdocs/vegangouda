import { Toast, RequireAuth } from '@vegangouda/web/design-system';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@vegangouda/web/feature-auth';
// import { WebDesignSystem } from '@vegangouda/web/design-system';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* auth required */}
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
