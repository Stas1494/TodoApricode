import {ButtonHTMLAttributes, memo, ReactNode,} from 'react';
import './Button.scss';
import classNames from "classnames";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children?: ReactNode;
    theme?: ButtonTheme;
    disabled?: boolean;
}

export enum ButtonTheme {
    CLEAR_CLOSE = 'clear-close',
    DEFAULT = 'default',
}

export const Button = memo((props: ButtonProps) => {
    const {
        disabled,
        className,
        children,
        theme = ButtonTheme.DEFAULT,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames('Button', {'disabled': disabled}, [className, theme])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
