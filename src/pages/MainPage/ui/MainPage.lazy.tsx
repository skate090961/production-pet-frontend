import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((res) => {
    // @ts-ignore
    // TODO: Удалить при деплое
    setTimeout(() => res(import('./MainPage')), 1000);
}));
