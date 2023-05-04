import classNames from "classnames";
import {AuthForm} from "../../components/AuthForm/AuthForm";
import {memo} from "react";

interface AuthPageProps {
    className?: string,
}

export const AuthPage = memo(({className}: AuthPageProps ) => {
    return (
        <div className={classNames('AuthPage', {}, [className])}>
            <AuthForm/>
        </div>
    );
});

