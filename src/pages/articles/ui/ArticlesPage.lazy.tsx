import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => new Promise((res) => {
    // @ts-ignore
    // TODO: Удалить при деплое
    setTimeout(() => res(import('./ArticlesPage')), 1000);
}));
