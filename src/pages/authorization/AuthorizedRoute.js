import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthentication } from '../../store/selector';
import { HOME_PAGE } from '../routes';

const AuthorizedRoute = (props) => {
    const isLoggedIn = useSelector(getUserAuthentication)
    return (
        isLoggedIn ?  <Navigate to={HOME_PAGE} replace={true} />
        : props.child
    )
};

export default AuthorizedRoute;