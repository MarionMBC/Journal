import { compose, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {authReducer} from "../reducers/authReducer";
import {uiAnimationReducer, uiReducer} from "../reducers/uiReducer";
import {notesReducer} from "../reducers/notesReducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        animation: uiAnimationReducer,
        notes: notesReducer
    },
    middleware: [thunk],
    devTools: composeEnhancers()
});


