import React from 'react';
import InputComponent from "../InputComponent";
import {useForm} from "../../hooks/useForm";
import AuthButton from "../button/AuthButton";
import {Link} from "react-router-dom";
import './auth.css';
import SocialNetworkBottom from "../button/SocialNetworkBottom";
import {useDispatch} from "react-redux";
import {asyncLogin, login, startGoogleLogin} from "../../actions/auth";

const LoginScreen = () => {

    const dispatch = useDispatch()

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
        dispatch(asyncLogin(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div
                className='rounded space-y-4 opacity-90 flex flex-col bg-white text-gray-500 font-normal p-4 sm:mx-48 md:mx-60 lg:mx-[37rem]'>
                <p className={'self-baseline text-2xl'}>Login</p>
                <InputComponent {...emailInput}/>
                <InputComponent {...passwordInput} />
                <p className={'underline self-end cursor-pointer transition-all hover:text-yellow-600'}>Forgot your
                    password?</p>
                <AuthButton content='Login'/>
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