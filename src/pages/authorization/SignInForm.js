import {ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP_PAGE, MENU_PAGE } from '../routes';
import Api from '../../componenets/api';
import * as Yup from 'yup';

const SignInForm = () => {
    const [ Token, setToken ] = useState("")
    const [ error, setError ] = useState("")

    useEffect(() => {
        if(Token !== "") {
            Api.fetchUserToken(Token)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    window.location.replace(MENU_PAGE)
                })
        }
    }, [Token])


    return (
        <>
            <div className='inFormCont' >
                <div className='formTitle' >Sign-In</div>
                <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Wrong or Invalid email address or mobile phone number. Please correct and try again.')
                        .required("Enter your email or mobile phone number"),
                    password: Yup.string()
                        .min(6, " Minimum 6 characters required")
                        .required("Minimum 6 characters required"),
                })}
                onSubmit={(values, {setSubmitting}) => {
                        Api.fetchUserLogin(values)
                            .then(res => res.json())
                            .then(res => {
                                if(res.error) {
                                    setError(res.error)
                                } else {
                                    localStorage.setItem("Cookie", res.accesToken)
                                    setToken(res.accesToken)
                                }
                                
                            })
                }}
                >
                    <Form>
                        <div className="formBox">
                        <label htmlFor="email" >Email</label>
                        <Field name="email" />
                        <ErrorMessage component="div" className="errMessage" name="email" />
                        </div>
                        <div className="formBox">

                        <label htmlFor="password" >Password</label>
                        <Field type="password" name="password" />
                        <ErrorMessage component="div" className="errMessage" name="password" />
                        </div>

                        {error !== "" && <div className='fetchErrMessage' >{error}</div>}

                        <button type="submit" className='submitButton' >Continue</button>
                    </Form>
                </Formik>
                <div className='CondNdPrivacy' >By continuing, you agree to Amazon's 
                    <a target="_blank" className='A-type-1' href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088'> Conditions of Use </a> 
                    and <a target="_blank" className='A-type-1' href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496' > Privacy Notice.</a>
                </div>
            </div>
            <div className='newToCont' >
                <span>New to Amazon?</span>
            </div>
            <div className='createAccCont' >
                <Link to={SIGN_UP_PAGE} ><div className='createAccBtn'>Create your Amazon account</div></Link>
            </div>

        </>
    );
};

export default SignInForm;