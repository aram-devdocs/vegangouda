import { Toast, RequireAuth } from '@vegangouda/web/design-system';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '@vegangouda/web/feature-auth';
import { Router } from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toast />
    </QueryClientProvider>
  );
}

export default App;
