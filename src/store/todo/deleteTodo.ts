import {ITodo} from "../types/types";
import {API} from "../../helpers/api/api";


export const deleteTodo = async (todo: ITodo) => {
    try {
        const response = await API.delete<ITodo>(`/todos`)

        if(!response.data) {
            throw new Error()
        }

        return response.data;
    } catch (err) {
        console.error('error getCompletedTodos')
    }
}