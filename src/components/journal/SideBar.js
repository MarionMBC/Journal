import React from 'react';

import { BiUser } from "react-icons/bi";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import JournalEntries from "./JournalEntries";
import './sideBar.css'
import { useDispatch, useSelector } from "react-redux";
import { accountLogOut } from "../../actions/auth";
import { notesAdd, startLoadNotes } from "../../actions/notes";
import { MdClose } from "react-icons/md";
const SideBar = ({ handleShow }) => {

    const dispatch = useDispatch()
    const { name, uid } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(accountLogOut())
    }
    const handleAddNote = () => {
        dispatch(notesAdd('', ''))
        dispatch(startLoadNotes(uid))
    }





    return (
        <aside className={'hidden sm:relative sm:block overflow-y-auto animate__animated animate__faster h-screen bg-gray-800 sm:w-[30rem]'} id={'sideBar'}>
            <MdClose id={'btn-close-menu'} onClick={handleShow} className={'hidden sm:hidden transition-all hover:text-yellow-400  animate-pulse text-white m-5 w-10 h-10 cursor-pointer hover:scale-105 hover:animate-pulse'}></MdClose>
            <div className={'flex bg-yellow-400 items-center justify-between group text-black mx-2 hover:text-white cursor-pointer transition-all rounded-e px-5 py-2 mt-2'}>
                <div className={'flex items-center'}>
                    <BiUser className={'w-8 h-8'} />
                    <p className={'ms-2 font-medium'}>{name}</p>
                </div>
                <button onClick={handleLogout} className={'py-1.5  px-3 bg-gray-800  rounded hover:scale-105 hover:bg-white hover:text-gray-950 cursor-pointer text-white transition-all font-normal hover:font-thin'}>Logout</button>
            </div>
            <div className={'flex relative justify-center w-full mt-5'}>
                <div onClick={handleAddNote} className={'group cursor-pointer'}>
                    <BsFillCalendarPlusFill className={'w-24 group h-24 hover:scale-105 transition-all hover:ease-in-out hover:text-yellow-500'} />
                    <p className={'text-sm scale-0 group-hover:scale-100 font-medium top-1 right-16 absolute py-[0.1px] px-1 bg-white text-black rounded transition-all group-hover:animate-pulse'}>Add Event</p>
                </div>
            </div>
            <JournalEntries />
        </aside>
    );
};

export default SideBar;
