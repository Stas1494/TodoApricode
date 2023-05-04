import {ITodo, queryParamsEnum} from "../types/types";
import {API} from "../../helpers/api/api";


export const getFilteredTodos = async (queryParams: queryParamsEnum) => {
    try {
        const response = await API.get<ITodo[]>(`/todos${queryParams}`,)

        if(!response.data) {
            throw new Error()
        }

        return response.data;
    } catch (err) {
        console.error('error fetchTodos')
    }
}