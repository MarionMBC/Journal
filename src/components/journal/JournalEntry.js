import React from 'react';
import moment from "moment";
import {useDispatch} from "react-redux";
import {activeNote} from "../../actions/notes";

const JournalEntry = ({body, date, title, url, id}) => {

    const dispatch = useDispatch();

    const handleSelectNote = () => {
        dispatch(activeNote(id, {body, date, title}))
    }

    const noteDate = moment(date)

    return (
        <div onClick={handleSelectNote} className={'bg-gray-900 h-20 w-full text-white overflow-hidden transition-all ease-in-out flex my-2 rounded-lg hover:bg-yellow-500 cursor-pointer'}>
            <div className={'w-14'}>
            <img alt={'...'} className={'object-cover h-full'} src={'https://picsum.photos/seed/picsum/200'}/>
            </div>
            <div className={'overflow-hidden w-40 text-start py-2 ms-2 justify-center flex flex-col'}>
                <p className={'font-medium'}>{title}</p>
                <p className={'overflow-hidden'}>{body}</p>
            </div>
            <div className={'flex px-2 flex-1 flex-col justify-center font-normal items-end text-sm'}>
                <p className={''}>{noteDate.format('dddd')}</p>
                <p className={''}>{noteDate.format('Do')}</p>
            </div>

        </div>
    );
};


export default JournalEntry;
