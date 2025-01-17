import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "@/shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>LOADING...</div>}>
            <Routes>
                {(routeConfig).map(({path, element}) => <Route
                    key={path}
                    path={path}
                    element={element}
                />)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;