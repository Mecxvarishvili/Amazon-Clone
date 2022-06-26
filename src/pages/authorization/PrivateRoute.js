import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { getUserAuthentication } from '../../store/selector';
import { SIGN_IN_PAGE } from '../routes';

const PrivateRoute = (props) => {
    const isLoggedIn = useSelector(getUserAuthentication)
    return (
        isLoggedIn ? props.child
        : <Navigate to={SIGN_IN_PAGE} replace={true} />
    );
};

export default PrivateRoute;