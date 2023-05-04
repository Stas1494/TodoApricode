import './AuthForm.scss'
import classNames from "classnames";
import {useCallback} from "react";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {observer} from "mobx-react-lite";
import storeLogin from "../../store/login/storeLogin";
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
    className?: string,
}

export const AuthForm = observer(({className}: AuthFormProps ) => {
    const navigate = useNavigate()
    const username = storeLogin.loginState.username;
    const password = storeLogin.loginState.password;
    const isLoading = storeLogin.loginState.isLoading;
    const error = storeLogin.loginState.error;

    const onChangeUsername = useCallback((value: string) => {
        storeLogin.setUsername(value)
    },[])
    const onChangePassword = useCallback((value: string) => {
        storeLogin.setPassword(value)
    },[])

    const onLoginClick = useCallback(async () => {
        await storeLogin.authUser(navigate)
    },[navigate])


    return (
        <div className={classNames('AuthForm', {}, [className])}>
            <div className={'AuthForm__wrapper'}>
                <h2 className={'AuthForm__title'}>Форма авторизации</h2>
                {error && <div className={'AuthForm__error'}>Вы ввели неверный логин или пароль</div>}
                <div className={'AuthForm__inputs'}>
                    <Input
                        value={username}
                        label={'Логин'}
                        type="text"
                        onChange={onChangeUsername}
                    />
                    <Input
                        value={password}
                        label={'Пароль'}
                        type="password"
                        onChange={onChangePassword}
                    />
                </div>
                <Button
                    onClick={onLoginClick}
                    className={'AuthForm__button'}
                    disabled={isLoading}
                >
                    Войти
                </Button>
            </div>

        </div>
    );
});

