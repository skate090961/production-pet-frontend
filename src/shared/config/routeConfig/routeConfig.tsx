import { RouteProps } from 'react-router-dom';

import { ArticlesPage } from '@/pages/ArticlesPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProjectsPage } from '@/pages/ProjectsPage';

export enum AppRoutes {
    MAIN = 'main',
    ARTICLES = 'articles',
    PROJECTS = 'projects',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.PROJECTS]: '/projects',
    // last route
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.articles,
        element: <ArticlesPage />,
    },
    {
        path: RoutePath.projects,
        element: <ProjectsPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
