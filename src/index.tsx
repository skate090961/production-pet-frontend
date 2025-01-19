import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import './shared/config/i18n';

render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root'),
);
