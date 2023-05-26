import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {firebase} from "../firebase/firebase-config";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";
import Spinner from "../components/spinner/Spinner";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import {loadNotes} from "../helpers/loadNotes";
import {notesLoad, startLoadNotes} from "../actions/notes";

const AppRouter = () => {
    const [checking, setChecking] = useState(true);
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(
             (user) => {
                if (user?.uid) {
                    dispatch(login(user.uid, user.displayName));
                    setIsLoggedIn(true)
                    dispatch(startLoadNotes(user.uid))
                } else {
                    setIsLoggedIn(false)
                }
            }
        )
        setChecking(false)
    }, [dispatch, setChecking, setIsLoggedIn]);



    const privateRoute = {
        isLoggedIn,
        component: JournalScreen,
    }

    const publicRoute = {
        isLoggedIn,
        component: AuthRouter
    }


    return (
        checking ? <Spinner/> : <Router>
            <Switch>
                <PrivateRoute
                    exact
                    path={'/'}
                    {...privateRoute}

                />
                <PublicRoute
                    exact
                    path={'/auth/login'}
                    {...publicRoute}
                />

                <PublicRoute
                    exact
                    path={'/auth/register'}
                    {...publicRoute}
                />

                <Redirect to={'/auth/login'}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;
