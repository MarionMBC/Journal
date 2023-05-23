import React from 'react';
import InputComponent from "../InputComponent";


const NoteAppContent = () => {
    return (
        <div className={'flex flex-col h-[30rem] text-start text-white p-5'}>
            <input
                className={'w-96 p-2 focus:outline-none bg-gray-800 placeholder:text-white border-none  rounded placeholder text-2xl placeholder:text-2xl'}
                placeholder={'Some awesome title!'}></input>
            <textarea

                className={'w-full resize-none h-full mt-2 p-2 focus:outline-none bg-gray-800 placeholder:text-white border-none  rounded placeholder text-2xl placeholder:text-2xl'}
                placeholder={'What happened today?'}></textarea>
        </div>
    );
};

export default NoteAppContent;
