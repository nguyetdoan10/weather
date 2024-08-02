import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { AppErrorFallback } from './components/errors/app-error-faillback';
import { Loading } from './components/loading';
import { ThemeProvider } from './providers/theme-provider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ThemeProvider>
          <ErrorBoundary FallbackComponent={AppErrorFallback}>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
