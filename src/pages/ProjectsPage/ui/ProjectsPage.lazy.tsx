import {lazy} from "react";

export const ProjectsPageLazy = lazy(() => new Promise(res => {
    //@ts-ignore
    //TODO: Удалить при деплое
    setTimeout(() => res(import('./ProjectsPage')), 1000)
}));