import classNames from "classnames";
import {Button, ButtonTheme} from "../Button/Button";
import './TodoItem.scss';
import CheckBox_No from '../../assets/icon/jsx/CheckBox_No';
import CheckBox_Yes from '../../assets/icon/jsx/CheckBox_Yes';
import {observer} from "mobx-react-lite";
import storeTodo from "../../store/todo/storeTodo";
import {ITodo} from "../../store/types/types";

interface TodoItemProps {
    className?: string;
    todo: ITodo;
}

export const TodoItem = observer( ({className, todo}: TodoItemProps) => {

    const toggleTodo = async () => {
        await storeTodo.completedTodo(todo)
    }
    const removeTodo = async () => {
        await storeTodo.removeTodo(todo.id)
    }

    return (
        <div className={classNames('TodoItem', {}, [className])}>
            <div className={'TodoItem__checkbox'}>
                {todo.completed
                    ? <CheckBox_Yes className={'TodoItem__icon'}/>
                    : <CheckBox_No className={'TodoItem__icon'}/>
                }
                <input
                    type="checkbox"
                    onChange={toggleTodo}
                    checked={todo.completed}
                />
            </div>

            <div>{todo.text}</div>
            <Button
                onClick={removeTodo}
                className={'TodoItem__btn'}
                theme={ButtonTheme.CLEAR_CLOSE}
            >
                X
            </Button>
        </div>
    );
});

