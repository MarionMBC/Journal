import React from 'react';
import InputComponent from "../InputComponent";
import {useForm} from "../../hooks/useForm";
import AuthButton from "../button/AuthButton";
import {Link} from "react-router-dom";
import './auth.css';
import SocialNetworkBottom from "../button/SocialNetworkBottom";
import {useDispatch, useSelector} from "react-redux";
import {signInWithEmailPassword, login, startGoogleLogin} from "../../actions/auth";
import {uiRemoveError, uiSetError} from "../../actions/ui";
import validator from "validator";
import Spinner from "../spinner/Spinner";

/**
 * @author MarionMBC
 * @version 1.0.0
 * LoginScreen component
 *  This component is used to login the user with email and password or with google  account
 * @return {JSX.Element}
 **/
const LoginScreen = () => {

    const dispatch = useDispatch()
    const {loading, msgError } = useSelector(state=> state.ui)


    const [formState, handleInputChange, , ,] = useForm({
        email: '',
        password: ''
    })
    const {email, password} = formState;

    const emailInput = {
        type: 'text',
        name: 'email',
        value: email,
        placeholder: 'Email',
        required: true,
        handleInputChange
    }

    const passwordInput = {
        type: 'password',
        name: 'password',
        value: password,
        placeholder: 'Password',
        required: true,
        handleInputChange
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(signInWithEmailPassword(email, password))
        }
    }

    const isFormValid = () => {
         if (!validator.isEmail(email)) {
            dispatch(uiSetError("Email is not valid"))
            return false
        } else if (!password) {
            dispatch(uiSetError('Password is required'));
            return false
        }
        dispatch(uiRemoveError())
        return true
    }

    const handleGoogleLogin = () => {
        if (isFormValid()) {
            dispatch(startGoogleLogin())
        }
    }





    return (
        <form onSubmit={handleSubmit} className={''}>
            <div
                className='relative justify-self-center rounded space-y-4 opacity-90 flex flex-col bg-white text-gray-500 font-normal p-4 w-80 '>
                <p className={'self-baseline text-2xl'}>Login</p>
                {msgError && <span className={'left-15 absolute top-6 font-normal self-center text-red-500 text-[13px] '}>{msgError}</span>}
                <InputComponent {...emailInput}/>
                <InputComponent {...passwordInput} />
                <p className={'underline self-end cursor-pointer transition-all hover:text-yellow-600'}>Forgot your
                    password?</p>
                <AuthButton content='Login' handleSubmit={handleSubmit} disabled={loading}/>
                <p>Login with social networks</p>
                <SocialNetworkBottom action={'Sign in'} handleAction={handleGoogleLogin}/>
                <Link to={'/auth/register'}
                      className={'underline hover:text-yellow-600 transition-all cursor-pointer self-start text-amber-400'}>Don't
                    have an account? Sign up</Link>
            </div>
        </form>
    );
}

export default LoginScreen;