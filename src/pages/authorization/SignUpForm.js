import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PAGE } from '../routes';
import * as Yup from 'yup'
import Api from '../../componenets/api';
import AuthorizationError from './AuthorizationError';
import { setUserAuthentication, setUser } from '../../store/user/userAction';
import { useDispatch } from 'react-redux/es/exports';
import Loader from '../../componenets/Loader';
import { setUserCart } from '../../store/cart/cartActions';

const SignUpForm = () => {
    const [ error, setError ] = useState(false)
    const [ loading, setIsLoading ] = useState(false)
    const [ token, setToken ] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        if(token !== "") {
            Api.fetchUserToken(token)
                .then(res => res.json())
                .then(res => {
                    dispatch(setUser(res))
                    dispatch(setUserAuthentication(true))
                    dispatch(setUserCart(res.cart))
                })
        }
    }, [token])

    return (
        error ?
        <AuthorizationError error={error} setError={setError}/>
        :
        <Loader isLoading={loading} >
        <div className='inFormCont' >
            <div className='formTitle' >Create Account</div>
            <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{fullName: '', email: '', password: '', rePassword: '', }}
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .required("Enter your name"),
                email: Yup.string()
                    .email('Wrong or Invalid email address or mobile phone number. Please correct and try again.')
                    .required("Enter your email or mobile phone number"),
                password: Yup.string()
                    .min(6, " Minimum 6 characters required")
                    .required("Minimum 6 characters required"),
                rePassword: Yup.string().when("password", {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                      [Yup.ref("password")],
                      "Both password need to be the same"
                    )
                  })
                  .required("Type your password again")
            })}
            onSubmit={(values, {setSubmitting}) => {
                setIsLoading(true)
                Api.fetchUserRegister(values)
                    .then(res => res.json())
                    .then(res => {
                        if(res.error) {
                            setError(res.error)
                            setIsLoading(false)
                        } else {
                            window.localStorage.setItem("Token", res.accessToken)
                            setToken(res.accessToken)
                        }
                    })
            }}
            >
                <Form>
                    <div className="formBox">
                    <label htmlFor="fullName" >Your Name</label>
                    <Field name="fullName" />
                    <ErrorMessage component="div" className="errMessage" name="fullName" />
                    </div>
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
                    <div className="formBox">
                    <label htmlFor="rePassword" >Re-enter assword</label>
                    <Field type="password" name="rePassword" />
                    <ErrorMessage component="div" className="errMessage" name="rePassword" />
                    </div>

                    {error !== "" && <div className='fetchErrMessage' >{error}</div>}

                    <button type="submit" className='submitButton' >Continue</button>
                </Form>

            </Formik>
            <div className='CondNdPrivacy' >By creating an account, you agree to Amazon's 
                <a className='A-type-1' href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088'> Conditions of Use </a> 
                and <a className='A-type-1' href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496' > Privacy Notice.</a>
            </div>
            <div className='shadowCont-inner'></div>
            <div className='signInCont' >
                <div>Already have an account? <Link to={SIGN_IN_PAGE} className='A-type-1' >Sign-in</Link></div>
            </div>
        </div>
        </Loader>
    );
};

export default SignUpForm;