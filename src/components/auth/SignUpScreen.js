import React from 'react';
import InputComponent from "../InputComponent";
import AuthButton from "../button/AuthButton";
import SocialNetworkBottom from "../button/SocialNetworkBottom";
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";

const SignUpScreen = () => {

    const [formState, handleInputChange, , ,] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
    const {name, email, password, passwordConfirm} = formState;

    const userName = {
        type: 'text',
        name: 'name',
        value: name,
        placeholder: 'Name',
        required: true,
        handleInputChange
    }


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

    const passwordConfirmInput = {
        type: 'password',
        name: 'passwordConfirm',
        value: passwordConfirm,
        placeholder: 'Confirm Password',
        required: true,
        handleInputChange
    }

    const handleRegister = () => {
        console.log(formState)
    }

    const isFormValid = () => {

    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <div
                className='rounded space-y-4 opacity-90 flex flex-col bg-white text-gray-500 font-normal p-4 sm:mx-48 md:mx-60 lg:mx-[37rem]'>
                <p className={'self-baseline text-2xl'}>Sign Up</p>
                <InputComponent {...userName}/>
                <InputComponent {...emailInput}/>
                <InputComponent {...passwordInput}/>
                <InputComponent {...passwordConfirmInput}/>
                <AuthButton content='Sign Up'/>
                <p>Sign up with social networks</p>
                <SocialNetworkBottom action={'Sign up'} handleAction={handleRegister}/>
                <Link to={'/auth/login'}
                      className={'underline hover:text-yellow-600 transition-all cursor-pointer self-start text-amber-400'}>Already
                    have an account? Sign in</Link>
            </div>
        </form>
    );
}

export default SignUpScreen;