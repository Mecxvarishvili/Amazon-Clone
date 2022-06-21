import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from '../routes';

const AuthorizationError = (props) => {
    const { title, describe, email } = props.error
    return (
        <div>
            <div>
                <div>{title}</div>
                <div>{describe} <span>{email}</span></div>
            </div>
            <div>
                <div>Are you returning customer?</div>
                <Link to={SIGN_IN_PAGE}>Sing-In</Link>
                <div>New to Amazon.com?</div>
                <div>create new account with <span onClick={() => props.setError(false)}>a different e-mail address</span></div>
            </div>
            
            
        </div>
    );
};

export default AuthorizationError;