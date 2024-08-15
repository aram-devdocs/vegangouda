import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  AppProvider,
  AuthProvider,
  ToastProvider,
} from '@vegangouda/web/design-system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { LayoutWrapper } from '@vegangouda/web/feature-nav';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppProvider>
            <LayoutWrapper>
              <ToastProvider>
                <App />
              </ToastProvider>
            </LayoutWrapper>
          </AppProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
