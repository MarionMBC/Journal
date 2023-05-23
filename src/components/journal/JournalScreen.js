import React from 'react';
import SideBar from "./SideBar";
import { show} from "../../selectors/showSideBar";
import {GiHamburgerMenu} from "react-icons/gi";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
const JournalScreen = () => {
    return (
        <div className={'relative flex h-screen animate__animated'}>
            <SideBar/>

            <main className={'animate__animated w-full animate__fadeInLeft'}>
                <NoteScreen/>
                {/*<NothingSelected/>*/}
            </main>

        </div>
    );
}

export default JournalScreen;