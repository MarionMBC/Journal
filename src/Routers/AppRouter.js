import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={ AuthRouter } />
                <Route exact path="/" component={JournalScreen} />
                <Route path='*'>
                    <h1>No encontrado</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
