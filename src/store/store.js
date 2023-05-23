import {authReducer} from "../reducers/authReducer";
import {applyMiddleware, compose, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: [thunk],
    devTools: composeEnhancers()
});
