import React from 'react';
import './styles/index.scss';
import {useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/router";
import {clsx} from "clsx";
import {Header} from "@/widgets/Header";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx('app', theme)}>
            <Header/>
            <div className={'container'}>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;