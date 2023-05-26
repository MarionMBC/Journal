import React from 'react';
import JournalEntry from "./JournalEntry";
import { useSelector} from "react-redux";

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
