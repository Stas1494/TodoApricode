import React, {InputHTMLAttributes, memo} from 'react';
import './Input.scss';
import classNames from "classnames";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    type?: string;
    onChange?: (value: string) => void;
    label?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        label,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };


    return (
        <div className={classNames('input', {}, [className])}>
            { label && (
                <div className={'input__label'}>
                    {label}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={'input__enter'}
                {...otherProps}
            />
        </div>
    );
});
