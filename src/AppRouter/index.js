import React from 'react';
import { appMap,ROLE_ADMIN} from './routes';
import { Routes, Route } from "react-router";
import {PageNotFound} from "../pages/NotFound";
import {shallowEqual, useSelector} from "react-redux";
import {getUser} from "../AppStore/selectors";

export const AppRouter = () => {
    const currentUser=useSelector(getUser,shallowEqual);

    return (
        <Routes>
            {
                appMap.map(({ path, Component,type,name }) =>
                    (!type||type===currentUser.role||currentUser.role===ROLE_ADMIN)&&
                    <Route
                        key={path} path={path}
                        element={Component}
                        exact
                    />
                )
            }
            {/*<Route path={"*"} element={<Navigate replace to={ROUTE_HOME} />} />*/}
            <Route path={"*"} element={<PageNotFound/>} />
        </Routes>
    )
}

