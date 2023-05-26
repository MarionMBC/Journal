import React from 'react';
import {BiUpload} from "react-icons/bi";
import moment from "moment";

const NoteAppBar = ({date, handleUpdate}) => {

    const barDate = moment(date)

    return (
        <div className={'px-5 bg-yellow-400 flex font-normal h-16 justify-between items-center z-10'}>
            <span className={'text-sm font-medium'}>{barDate.format('LLL')}</span>
            <div className={'flex justify-between space-x-2'}>
                <button className={'relative justify-center flex items-center text-white w-24 py-1.5 rounded bg-gray-800 transition-all ease-in-out hover:scale-105 hover:bg-gray-900'}>
                    <BiUpload className={'w-5 h-5'}/>
                    <span className={'ms-2'}>Picture</span>
                </button>
                <button onClick={handleUpdate} className={'bg-white py-2 w-24 rounded'}>Save</button>
            </div>
        </div>
    );
};

export default NoteAppBar;
