import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import SignUpScreen from "../components/auth/SignUpScreen";

const AuthRouter = () => {
    return (
            <>
                <h1 className={'my-10 text-3xl'}>Journal</h1>
            <Switch>
                <Route path='/auth/login'  component={ LoginScreen } />
                <Route path='/auth/register' component={SignUpScreen} />
                <Redirect to={'/auth/login'}/>
            </Switch>
            </>
    );
};

export default AuthRouter;
