import {Route, Routes } from "react-router-dom";
import {AppRouterProps, routeConfig} from "../routeConfig/routeConfig";
import {Suspense, useCallback} from "react";
import {RequireAuth} from "./RequireAuth";


export const AppRouter = () => {

    const renderWithWrapper = useCallback((route: AppRouterProps)=>{
        const element = (
            <Suspense fallback={'Загрузка...'}>
                {route.element}
            </Suspense>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    },[])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

