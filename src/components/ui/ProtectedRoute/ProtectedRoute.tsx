import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {Navigate, useLocation} from "react-router-dom";
import {unprotectedRoutePaths} from "../../../routes";

const ProtectedRoute = ({children}: { children: JSX.Element }) => {
    const {admin} = useAppSelector(state => state.auth)
    let location = useLocation()

    if (!admin) {
        return <Navigate to={unprotectedRoutePaths.HOME} state={{from: location}}/>
    }
    return children
};

export default ProtectedRoute;