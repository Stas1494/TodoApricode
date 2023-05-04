import {ITodo} from "../types/types";
import {API} from "../../helpers/api/api";


export const fetchTodos = async () => {
    try {
        const response = await API.get<ITodo[]>('/todos')

        if(!response.data) {
            throw new Error()
        }

        return response.data;
    } catch (err) {
        console.error('error fetchTodos')
    }
}