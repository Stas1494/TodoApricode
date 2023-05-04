import classNames from "classnames";
import {TodoList} from "../../components/TodoList/TodoList";
import {useCallback, useEffect, useState} from "react";
import {TodoAdd} from "../../components/TodoAdd/TodoAdd";
import './TodosPage.scss'
import {Button} from "../../components/Button/Button";
import {TodosFilter} from "../../components/TodosFilter/TodosFilter";
import {observer} from "mobx-react-lite";
import storeLogin from "../../store/login/storeLogin";
import {useNavigate} from "react-router-dom";
import storeTodo from "../../store/todo/storeTodo";
import {Loader} from "../../components/Loader/Loader";

interface TodosPageProps {
    className?: string,
}

export const TodosPage = observer(({className}: TodosPageProps ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const authData = storeLogin.authData;
    const navigate = useNavigate();
    const isLoading = storeTodo.todosState.isLoading;

    const error = storeTodo.todosState.error;

    const onOpenModal = useCallback(() => {
        setIsOpen(true)
    },[])

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    },[])

    const onLogout = useCallback(() => {
        storeLogin.logout(navigate);
    },[navigate])

    useEffect(()=> {
        storeTodo.getTodos()
    },[])



    return (
        <div className={classNames('TodosPage', {}, [className])}>
            {isOpen &&
                <TodoAdd
                    onCloseModal={onCloseModal}
                />
            }
            <div className={'TodosPage__wrapper'}>
                <div className={'TodosPage__header'}>
                    <h1 className={'TodosPage__title'}>Todo</h1>
                    <Button
                        onClick={onLogout}
                        className={'TodosPage__logout'}
                    >
                        Выйти
                    </Button>
                </div>

                <Button
                    className={'TodosPage__add'}
                    onClick={onOpenModal}>
                    Добавить задачу
                </Button>
                <TodosFilter />
                {error && <div className={'TodosPage__loader'}>Произошла ошибка при загрузке Todos</div>}
                { isLoading ?
                    <div className={'TodosPage__loader'}>
                        <Loader />
                    </div>
                    :<TodoList className={'TodosPage__todos'}/>
                }
            </div>

        </div>
    );
});

