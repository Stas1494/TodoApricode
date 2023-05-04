import {ITodo} from "../types/types";
import {API} from "../../helpers/api/api";


export const updateTodos = async (todosDate: ITodo[]) => {
    try {

        const response = await API.post('/todos', {...todosDate, })

        if(!response.data) {
            throw new Error()
        }

        return response.data;
    } catch (err) {
        console.error('error updateTodos')
    }
}