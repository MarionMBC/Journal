import React, {useEffect} from 'react';
import SideBar from "./SideBar";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
import {useSelector} from "react-redux";
import {AiOutlineMenu} from "react-icons/ai";
import {MdClose} from "react-icons/md";

const JournalScreen = () => {
    const {notes, active} = useSelector(state => state.notes)

    const handleShow = () => {

        const sideBar = document.getElementById('sideBar')
        const btnOpenMenu = document.getElementById('btn-open-menu')
        const btnCloseMenu = document.getElementById('btn-close-menu')
        const main = document.querySelector('main')
        sideBar.classList.toggle('hidden')
        sideBar.classList.toggle('absolute')
        //animate__fadeInLeft
        sideBar.classList.toggle('animate__fadeInLeft')
        sideBar.classList.toggle('z-50')
        sideBar.classList.toggle('w-full')
        btnOpenMenu.classList.toggle('hidden')
        btnCloseMenu.classList.toggle('hidden')


    }

    return (
        <div className={'animate__animated animate__fadeIn relative w-full flex h-screen '}>
            <AiOutlineMenu id={'btn-open-menu'} onClick={handleShow} className={'absolute sm:hidden text-yellow-400 hover:text-white m-5 w-10 h-10 cursor-pointer hover:scale-105 hover:animate-pulse'}></AiOutlineMenu>
            <SideBar handleShow={handleShow} />
            <main className={'w-full '}>
                {active
                    ? <NoteScreen/>
                    : <NothingSelected/>}
            </main>

        </div>
    );
}

export default JournalScreen;