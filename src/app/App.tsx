import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "@/app/providers/ThemeProvider";
import {ProjectsPage} from "@/pages/ProjectsPage";
import {ArticlesPage} from "@/pages/ArticlesPage";
import {MainPage} from "@/pages/MainPage";

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
            <Suspense fallback={<div>LOADING...</div>}>
                <Routes>
                    <Route path={'/projects'} element={<ProjectsPage/>}/>
                    <Route path={'/articles'} element={<ArticlesPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;