import React, {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/router";
import {clsx} from "clsx";
import {Header} from "@/widgets/Header";
import {Gradient} from "@/shared/ui/Gradient";

const App = () => {
    const { theme } = useTheme();
    const classNames = clsx('app', theme);

    return (
        <div className={classNames}>
            <Suspense fallback={'...LOADING'}>
                <Header/>
                <div className={'container'}>
                    <Gradient/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;