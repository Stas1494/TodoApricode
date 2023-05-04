import './TodoAdd.scss'
import classNames from "classnames";
import {Button, ButtonTheme} from "../Button/Button";
import {Input} from "../Input/Input";
import React, {ChangeEvent, ChangeEventHandler, useCallback, useState} from "react";
import {observer} from "mobx-react-lite";
import storeTodo from "../../store/todo/storeTodo";

interface TodoAddProps {
    className?: string,
    onCloseModal: () => void
}

export const TodoAdd = observer((props: TodoAddProps ) => {
    const {className, onCloseModal} = props;
    const [text, setText] = useState<string>('');

    const clickHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
    }
    const addTodo = useCallback (() => {
        storeTodo.addTodo(text)
        setText('')
        onCloseModal()
    },[text])

    return (
        <div onClick={onCloseModal} className={classNames('TodoAdd', {}, [className])}>
            <div onClick={clickHandler} className={'TodoAdd__modal'}>
                <Input
                    value={text}
                    onChange={text => setText(text)}
                    label={'Введите текст задачи'}
                    type="text"
                />
                <Button
                    onClick={addTodo}
                >
                    Добавить
                </Button>
                <Button
                    onClick={onCloseModal}
                    theme={ButtonTheme.CLEAR_CLOSE}
                    className={'TodoAdd__close'}
                >
                    X
                </Button>
            </div>
        </div>
    );
});

