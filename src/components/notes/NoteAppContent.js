import React, { useEffect, useRef } from 'react';
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { editActiveNote } from "../../actions/notes";
import { AiFillDelete } from "react-icons/ai";
import { deleteNote } from "../../helpers/deleteNote";


const NoteAppContent = ({ id, noteTitle, noteBody, noteUrl, handleUpdate }) => {

    const dispatch = useDispatch();
    const activeId = useRef(id);

    const [formState, handleInputChange, , , reset] = useForm({
        title: noteTitle, body: noteBody
    })


    const handleDelete = () => {
        deleteNote(dispatch)
    }

    useEffect(() => {
        if (id !== activeId.current) {
            reset({
                title: noteTitle, body: noteBody
            });
            activeId.current = id
        }
    }, [dispatch, id, noteTitle, noteBody, reset])

    const { title, body } = formState

    useEffect(() => {
        dispatch(editActiveNote(title, body))
    }, [
        title, body, dispatch
    ])





    return (<div className={'flex flex-col text-start text-white p-5'}>
        <form onSubmit={handleUpdate} className={'h-[30rem]'}>
            <AiFillDelete onClick={handleDelete} className={' w-8 h-8 right-0 me-5 absolute top-[90px] text-yellow-400 hover:text-red-500 cursor-pointer hover:scale-105 transition-all easy-in-out'} />
            <input
                name={'title'}
                value={title}
                onChange={handleInputChange}
                className={'w-60 lg:w-96 p-2 focus:outline-none bg-gray-800 placeholder:text-white border-none  rounded placeholder text-2xl placeholder:text-2xl'}
                placeholder={'Some awesome title!'}></input>

            <textarea
                name={'body'}
                value={body}
                onChange={handleInputChange}
                className={'w-full resize-none h-full mt-2 p-2 focus:outline-none bg-gray-800 placeholder:text-white border-none  rounded placeholder text-2xl placeholder:text-2xl'}
                placeholder={'What happened today?'}></textarea>
        </form>
        <div className=''>
            <img className='h-40 rounded-lg object-cover' alt='' src={noteUrl}></img>
            {/* <div onClick={handleDelete} className={'hidden sm:block self-end relative group -bottom-24'}>
                <AiFillDelete className={'w-10 h-10 text-yellow-400 hover:text-red-500 cursor-pointer hover:scale-105 transition-all easy-in-out'} />
                <p className={'absolute w-20 py-[0.2px] bg-white text-black rounded text-center font-medium px-[3px] right-8 text-sm bottom-8 scale-0 group-hover:scale-100 group-hover:animate-pulse'}>Delete note</p>
            </div> */}

        </div>

    </div>);
};

export default NoteAppContent;
