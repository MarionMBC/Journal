import React from 'react';
import SideBar from "./SideBar";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
import {useSelector} from "react-redux";

const JournalScreen = () => {
    const {notes, active} = useSelector(state => state.notes)

    return (
        <div className={'animate__animated animate__fadeIn relative w-full flex h-screen '}>
            <SideBar/>
            <main className={'w-full '}>
                {active
                    ? <NoteScreen/>
                    : <NothingSelected/>}
            </main>

        </div>
    );
}

export default JournalScreen;