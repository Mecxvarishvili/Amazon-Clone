import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../../img/black-logo.png'
import { HOME_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from '../routes';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const AuthorizationPage = () => {
    const location = useLocation()


    return (
        <div className='authorizationPage' >
            <div className="imgCont">
                <Link to={HOME_PAGE} >
                    <img src={image} />
                </Link>
            </div>
            <div className="formCont" >
                <div className="cloner" >This website is an Amazon.com clone, so don't use Amazon user data.</div>
                {location.pathname === SIGN_IN_PAGE && <SignInForm/>}
                {location.pathname === SIGN_UP_PAGE && <SignUpForm/>}
            </div>
            <div className="aboutCont" >
                <div className="shadowCont-inner" ></div>
                <div className="helpCont" >
                    <div>
                        <a target="_blank" className='A-type-1' href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088' >Conditions of Use</a>
                    </div>
                    <div>
                        <a target="_blank" className='A-type-1' href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496' >Privacy Notice</a>
                    </div>
                    <div>
                        <a target="_blank" className='A-type-1' href='https://www.amazon.com/gp/help/customer/display.html' >Help</a>
                    </div>
                </div>
                <div className='inc' >© Amazon.com, Clone Website</div>
            </div>
        </div>
    );
};

export default AuthorizationPage;