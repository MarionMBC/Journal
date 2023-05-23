import React from 'react';
import NoteAppBar from "./NoteAppBar";
import NoteAppContent from "../journal/NoteAppContent";

const NoteScreen = () => {
    return (
        <div className={'text-gray-800 flex w-full flex-col'}>
            <NoteAppBar/>
            <NoteAppContent/>
        </div>
    );
};

export default NoteScreen;
