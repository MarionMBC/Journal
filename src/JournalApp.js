import React from 'react';
import {Provider} from "react-redux";
import AppRouter from "./Routers/AppRouter";
import {store} from "./store/store";


const JournalApp = () => {
    return (
        <Provider store={store}>
        <section className={'flex flex-col justify-center items-center font-thin bg-gray-900 text-yellow-400 text-center h-screen'}>
                <AppRouter/>
        </section>
        </Provider>
    );
}

export default JournalApp;