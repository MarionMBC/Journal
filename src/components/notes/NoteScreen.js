import React, {useEffect} from 'react';
import NoteAppBar from "./NoteAppBar";
import NoteAppContent from "./NoteAppContent";
import {useDispatch, useSelector} from "react-redux";
import {updateNote} from "../../actions/notes";

const NoteScreen = () => {
    const dispatch = useDispatch();
    const {title, body, date, id, url} = useSelector(state => state.notes.active)
    const {uid} = useSelector(state=> state.auth)
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateNote({title, body, id, url}))
    }

    return (
        <div className={'text-gray-800 flex w-full flex-col'}>
            <NoteAppBar handleUpdate={handleUpdate} date={date} id={id}/>
            <NoteAppContent handleUpdate={handleUpdate} id={id} noteTitle={title} noteBody={body} noteUrl={url}/>
        </div>
    );
};

export default NoteScreen;
