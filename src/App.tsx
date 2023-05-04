import React, {useEffect} from 'react';
import classNames from "classnames";
import {AppRouter} from './router/ui/AppRouter';
import {observer} from "mobx-react-lite";
import storeLogin from "./store/login/storeLogin";

function App() {

    // useEffect(() => {
    //     storeLogin.initAuthData()
    // },[])

    return (
        <div className={classNames('app')}>
            <AppRouter/>
        </div>
    );
}

export default observer(App);
