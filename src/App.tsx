import React, {Suspense} from 'react';
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {ProjectsPageLazy} from "./pages/ProjectsPage/ProjectsPage.lazy";
import {ArticlesPageLazy} from "./pages/ArticlesPage/ArticlesPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

const App = () => {
    return (
        <div className={'app'}>
            <div>
                <Link to={'/'}>Главная</Link>
                <Link to={'/projects'}>Проекты</Link>
                <Link to={'/articles'}>Статьи</Link>
            </div>
            <Suspense fallback={<div>LOADING...</div>}>
                <Routes>
                    <Route path={'/projects'} element={<ProjectsPageLazy/>}/>
                    <Route path={'/articles'} element={<ArticlesPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;