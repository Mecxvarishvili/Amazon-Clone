import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from '../routes';

const AuthorizationError = (props) => {
    const { title, describe, email } = props.error
    return (
        <div className="errorCont">
            <div className="errorBox">
                <div className="errTitle" >{title}</div>
                <div className="errDescribe" >{describe} <span className="errEmail">{email}</span></div>
            </div>
            <div className="linkCont" >
                <div className="linkBox">
                    <div className="linkTitle" >Are you returning customer?</div>
                    <Link className="link link-normal" to={SIGN_IN_PAGE}>Sing-In</Link>
                </div>
                <div className="linkBox">
                    <div className="linkTitle" >New to Amazon.com?</div>
                    <div className="link-normal">create new account with <span className="link" onClick={() => props.setError(false)}>a different e-mail address</span></div>
                </div>
            </div>
        </div>
    );
};

export default AuthorizationError;