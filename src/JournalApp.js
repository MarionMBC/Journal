import React from 'react';
import {Provider} from "react-redux";
import AppRouter from "./Routers/AppRouter";
import {store} from "./store/store";


const JournalApp = () => {
    return (
        <Provider store={store}>
        <section className={'flex flex-col justify-center font-thin bg-gray-900 text-yellow-400 text-center h-screen'}>
            <div className={'flex-1'}>
                <AppRouter/>
            </div>
        </section>
        </Provider>
    );
}

export default JournalApp;