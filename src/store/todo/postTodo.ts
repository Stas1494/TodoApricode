import {ITodo} from "../types/types";
import {API} from "../../helpers/api/api";


export const postTodo = async (todo: ITodo) => {
    try {
        const response = await API.post<ITodo>('/todos', todo)

        if(!response.data) {
            throw new Error()
        }

        return response.data;
    } catch (err) {
        console.error('error fetchTodos')
    }
}