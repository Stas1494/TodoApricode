import {RouteProps} from 'react-router-dom';
import {AuthPage} from "../../pages/AuthPage/AuthPage";
import {TodosPage} from "../../pages/TodosPage/TodosPage";
import {NotFoundPage} from "../../pages/NotFoundPage/NotFoundPage";

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    AUTH = 'auth',
    TODOS = 'todos',

    // last
    NOT_FOUND = 'not_found'

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.AUTH]: '/',
    [AppRoutes.TODOS]: '/todo',
    // Последний
    [AppRoutes.NOT_FOUND]: '*',

};

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage/>,
    },
    [AppRoutes.TODOS]: {
        path: RoutePath.todos,
        element: <TodosPage/>,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
};
