import {ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP_PAGE } from '../routes';
import Api from '../../componenets/api';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUserAuthentication, setUser } from '../../store/user/userAction';
import { setUserCart } from '../../store/cart/cartActions';
import Loader from '../../componenets/Loader';

const SignInForm = () => {
    const [ token, setToken ] = useState("")
    const [ error, setError ] = useState(false)
    const [ loading, setIsLoading ] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(token !== "") {
            Api.fetchUserToken(token)
                .then(res => res.json())
                .then(res => {
                    const { cart, ...data } = res
                    dispatch(setUser(data))
                    Api.fetchCartProducts(cart)
                        .then(res => {
                            dispatch(setUserCart(res))
                            dispatch(setUserAuthentication(true))
                        })
                })
        }
    }, [token])


    return (
        <Loader isLoading={loading}>
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
                onSubmit={(values, {resetForm}) => {
                    setIsLoading(true)
                        Api.fetchUserLogin(values)
                            .then(res => res.json())
                            .then(res => {
                                if(res.error) {
                                    setError(res.error)
                                    resetForm({values: ''})
                                    setIsLoading(false)
                                } else {
                                    localStorage.setItem("Token", res.accessToken)
                                    setToken(res.accessToken)
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
        </Loader>
    );
};

export default SignInForm;