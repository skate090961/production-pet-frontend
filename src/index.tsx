import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers/error-boundary';
import { StoreProvider } from '@/app/providers/store-provider';
import { ThemeProvider } from '@/app/providers/theme-provider';

import App from './app/App';
import './shared/config/i18n';

render(
    <StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </StoreProvider>
    </StrictMode>,
    document.getElementById('root'),
);
