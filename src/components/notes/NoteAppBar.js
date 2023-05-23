import React from 'react';
import {BiUpload} from "react-icons/bi";

const NoteAppBar = () => {
    return (
        <div className={'px-5 bg-yellow-400 flex font-normal h-16 justify-between items-center'}>
            <span>28 agosto del 2020</span>
            <div className={'flex justify-between space-x-5'}>
                <button className={'relative justify-center flex items-center text-white w-24 py-1.5 rounded bg-gray-800 transition-all ease-in-out hover:scale-105 hover:bg-gray-900'}>
                    <BiUpload className={'w-5 h-5'}/>
                    <span className={'ms-2'}>Picture</span>
                </button>
                <button className={''}>Save</button>
            </div>
        </div>
    );
};

export default NoteAppBar;
