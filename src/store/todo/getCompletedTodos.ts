import {ITodo} from "../types/types";
import {API} from "../../helpers/api/api";


export const getCompletedTodos = async (todo: ITodo) => {
    try {
        const response = await API.get<ITodo>(`/todos?completed=${todo.id}`)

        if(!response.data) {
            throw new Error()
        }

        return response.data;
    } catch (err) {
        console.error('error getCompletedTodos')
    }
}