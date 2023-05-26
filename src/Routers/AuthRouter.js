import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import SignUpScreen from "../components/auth/SignUpScreen";
import {useSelector} from "react-redux";
import Spinner from "../components/spinner/Spinner";

const AuthRouter = () => {

    const {loading} = useSelector(ui=>ui.ui)



    return (
            <div className={'flex-1 animate__animated animate__fadeIn'}>
                <h1 className={'my-10 text-3xl'}>Journal</h1>
            <Switch>
                <Route exact path='/auth/login'  component={ LoginScreen } />
                <Route exact path='/auth/register' component={SignUpScreen} />
                <Redirect to={'/auth/login'}/>
            </Switch>
            </div>
    );
};

export default AuthRouter;
