import React from 'react';

import {BiUser} from "react-icons/bi";
import {BsFillCalendarPlusFill} from "react-icons/bs";
import JournalEntries from "./JournalEntries";
import './sideBar.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {accountLogOut, logout} from "../../actions/auth";
import {notesAdd} from "../../actions/notes";
const SideBar = () => {

    const dispatch = useDispatch()
    const {name} = useSelector(state=> state.auth)
    const handleLogout = () => {
        dispatch(accountLogOut())
    }
    const handleAddNote = () => {
        dispatch(notesAdd('Crear mi app de diario', 'No sé'))
    }

    return (
        <aside className={'hidden sm:block overflow-y-auto animate__fadeInLeft h-screen bg-gray-800 w-[30rem]'} id={'sideBar'}>
            <div className={'flex bg-yellow-400 items-center justify-between group text-black mx-2 hover:text-white cursor-pointer transition-all rounded-e px-5 py-2 mt-2'}>
                <div className={'flex items-center'}>
                    <BiUser className={'w-8 h-8'}/>
                    <p className={'ms-2 font-medium'}>{name}</p>
                </div>
                <button onClick={handleLogout} className={'py-1.5  px-3 bg-gray-800  rounded hover:scale-105 hover:bg-white hover:text-gray-950 cursor-pointer text-white transition-all font-normal hover:font-thin'}>Logout</button>
            </div>
           <div className={'flex relative justify-center w-full mt-5'}>
               <div onClick={handleAddNote} className={'group cursor-pointer'}>
                   <BsFillCalendarPlusFill className={'w-24 group h-24 hover:scale-105 transition-all hover:ease-in-out hover:text-yellow-500'}/>
                   <p className={'text-sm scale-0 group-hover:scale-100 font-medium top-1 right-16 absolute py-[0.1px] px-1 bg-white text-black rounded transition-all group-hover:animate-pulse'}>Add Event</p>
               </div>
           </div>
            <JournalEntries />
        </aside>
    );
};

export default SideBar;
