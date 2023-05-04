import classNames from "classnames";
import {memo} from "react";

interface NotFoundPageProps {
    className?: string,
}

export const NotFoundPage = memo(({className}: NotFoundPageProps) => {
    return (
        <div className={classNames('NotFoundPage', {}, [className])}>
            <div>Страница не найдена</div>
        </div>
    );
});

