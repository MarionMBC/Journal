import React, {useEffect} from 'react';
import JournalEntry from "./JournalEntry";
import {useDispatch, useSelector} from "react-redux";
import {loadNotes} from "../../helpers/loadNotes";
import {startLoadNotes} from "../../actions/notes";

const JournalEntries = () => {

    const {notes} = useSelector(state=> state.notes)
    return (
        <div className={'flex mx-2 flex-col  mt-2'}>
            {
                notes.map( note => (
                        <JournalEntry {...note} key={note.id}/>
                ))
            }
        </div>
    );
};

export default JournalEntries;
