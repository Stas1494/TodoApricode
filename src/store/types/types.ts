export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}
export interface ITodosSchema {
    todos: ITodo[];
    isLoading: boolean;
    error?: string;
}

export enum queryParamsEnum {
    all = '',
    done = '?completed=true',
    undone = '?completed=false',
}


export interface ILoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}
export interface IUser {
    id: string;
    username: string;
}
