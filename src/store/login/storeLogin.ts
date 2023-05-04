import {makeAutoObservable, runInAction} from "mobx"
import {fetchUser} from "./fetchUser";
import {ILoginSchema, IUser} from "../types/types";
import {USER_LOCALSTORAGE_KEY} from "../../helpers/const/localstorage";
import { NavigateFunction } from "react-router-dom";

class StoreLogin {

    loginState: ILoginSchema = {
        isLoading: false,
        username: '',
        password: '',
    }
    authData: IUser = {username: '', id: ''}

    constructor() {
        makeAutoObservable(this)
    }

    setUsername = (value: string) => {
        this.loginState.username = value
    }

    setPassword = (value: string) => {
        this.loginState.password = value
    }
    initAuthData = () => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if(user) {
            this.authData = JSON.parse(user);
        }
    }


    logout = (navigate: NavigateFunction) => {
        this.authData = {username: '', id: ''};
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        navigate('/')
    }


    async authUser(navigate: NavigateFunction) {
        this.loginState.isLoading = true
        this.loginState.error = undefined
        try {
            const user = await fetchUser({
                    username: this.loginState.username,
                    password: this.loginState.password,
                }
            );
            console.log(user)
            runInAction(() => {
                if (user) {
                    this.authData = user
                    this.loginState.isLoading = false
                    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))
                    this.setUsername('')
                    this.setPassword('')
                    navigate('/todo')

                } else {
                    throw new Error()
                }
            })
        } catch (e) {
            runInAction(() => {
                this.loginState.isLoading = false
                this.loginState.error = 'err'
            })
        }

    }
}

export default new StoreLogin();
