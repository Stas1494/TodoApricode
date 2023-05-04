import axios from "axios";
import {IUser} from "../types/types";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {action} from "mobx";

export interface fetchUserProps {
    username: string,
    password: string,
}
export const fetchUser = async (authData: fetchUserProps) => {
    const { username, password } = authData;
    try {
        const response = await axios.post<IUser>('http://localhost:8000/users', {username, password})

        if(!response.data) {
            throw new Error()
        }

        // console.log(response.data)
        return response.data;
    } catch (err) {
        console.error('error fetchUser')
    }
}