import React from 'react';
import {Redirect, Route} from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";

const PrivateRoute = ({isLoggedIn, component:Component, ...rest}) => {
    return (
        <Route {...rest}
               component={(props) => (
                   (isLoggedIn)
                       ? (<Component {...props} />)
                       : (<Redirect to={'/auth/login'} />)
               )}
        />
    );
};

export default PrivateRoute;
