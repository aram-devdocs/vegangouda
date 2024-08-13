import { Toast, RequireAuth } from '@vegangouda/web/design-system';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '@vegangouda/web/feature-auth';
import { Router } from './Router';
// import { WebDesignSystem } from '@vegangouda/web/design-system';

export function App() {
  return (
    <>
      <Router />
      <Toast />
    </>
  );
}

export default App;
