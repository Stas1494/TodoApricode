import classNames from "classnames";
import {Button} from "../Button/Button";
import './TodosFilter.scss'
import {observer} from "mobx-react-lite";
import {queryParamsEnum} from "../../store/types/types";
import storeTodo from "../../store/todo/storeTodo";

interface TodosFilterProps {
    className?: string,
}

export const TodosFilter = observer((props: TodosFilterProps) => {
    const {className} = props;

    const onFilterAll = async () => {
        await storeTodo.filteredTodos(queryParamsEnum.all)
    }
    const onFilterDone = async () => {
        await storeTodo.filteredTodos(queryParamsEnum.done)

    }
    const onFilterUndone = async () => {
        await storeTodo.filteredTodos(queryParamsEnum.undone)

    }

    return (
        <div className={classNames('TodosFilter', {}, [className])}>
            <Button
                className={'TodosFilter__btn'}
                onClick={onFilterAll}
            >
                Все
            </Button>
            <Button
                className={'TodosFilter__btn'}
                onClick={onFilterDone}
            >
                Выполненые
            </Button>
            <Button
                className={'TodosFilter__btn'}
                onClick={onFilterUndone}
            >
                Не выполненые
            </Button>
        </div>
    );
});

