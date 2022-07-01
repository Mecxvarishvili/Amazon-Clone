import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthentication } from '../../store/selector';
import { MENU_PAGE } from '../routes';

const AuthorizedRoute = (props) => {
    const isLoggedIn = useSelector(getUserAuthentication)
    return (
        isLoggedIn ?  <Navigate to={MENU_PAGE} replace={true} />
        : props.child
    )
};

export default AuthorizedRoute;