import './TodoList.scss'
import classNames from "classnames";
import {TodoItem} from "../TodoItem/TodoItem";
import {observer} from "mobx-react-lite";
import storeTodo from "../../store/todo/storeTodo";


interface TodoListProps {
    className?: string;
}

export const TodoList = observer((props: TodoListProps ) => {
    const {className} = props;

    return (
        <div className={classNames('TodoList', {}, [className])}>
            {storeTodo.todosState.todos.map(todo => (
                <TodoItem className={'TodoList__item'} todo={todo} key={todo.id}/>
            )) }
        </div>
    );
});

