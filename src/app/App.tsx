import { clsx } from 'clsx';
import React, { Suspense } from 'react';

import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Gradient } from '@/shared/ui/Gradient';
import { Header } from '@/widgets/Header';
import { PageLoader } from '@/widgets/PageLoader';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();
    const classNames = clsx('app', theme);

    return (
        <div className={classNames}>
            <Suspense fallback={<PageLoader />}>
                <Header />
                <div className="container">
                    <Gradient />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
