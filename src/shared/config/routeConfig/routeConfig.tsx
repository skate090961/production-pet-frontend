import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ProjectsPage } from '@/pages/ProjectsPage';

export enum AppRoutes {
    MAIN = 'main',
    ARTICLES = 'articles',
    PROJECTS = 'projects'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.PROJECTS]: '/projects',
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
];
