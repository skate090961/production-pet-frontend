import React from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div>
                <Link to={'/'}>Главная</Link>
                <Link to={'/projects'}>Проекты</Link>
                <Link to={'/articles'}>Статьи</Link>
            </div>
            <AppRouter/>
        </div>
    );
};

export default App;