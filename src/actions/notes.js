import {db} from "../firebase/firebase-config";
import {types} from "../types/types";
import {loadNotes} from "../helpers/loadNotes";
import Swal from "sweetalert2";



export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})



export const editActiveNote = ( title, body) => ({
    type: types.notesEdit,
    payload: {
        title,
        body
    }
})


export const notesAdd = (title, body, url='') => {
    return async (dispatch, getState) => {
        const {uid}  = getState().auth;
        const newNote = {
            title,
            body,
            date: new Date().getTime(),
            url
        }
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
        dispatch(activeNote(doc.id, newNote))
    }
}


export const startLoadNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid)
        dispatch(notesLoad(notes))
    }
}

export const notesLoad = (notes) => {
    return {
        type: types.notesLoad,
        payload: {
            notes
        }
    }
}


export const activeNoteDelete = () => ({
        type: types.notesDelete
})

export const notesDelete = () => {
    activeNoteDelete()
    return async (dispatch, getState) => {
        const {id} = getState().notes.active
        const {uid} = getState().auth
        await db.doc(`${uid}/journal/notes/${id}`).delete()
        dispatch(startLoadNotes(uid))
        dispatch(activeNoteDelete())
    }
}


export const updateNote = (note) => {
    return async (dispatch, getState)=> {
        const {uid} = getState().auth;
        if (!note.url ) {
            delete note.url
        }
        const noteToFirestore = {...note}
        console.log(noteToFirestore)
        delete noteToFirestore.id
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
        dispatch(startLoadNotes(uid));
        dispatch(activeNoteDelete())
        Swal.fire({
            title: 'Saved',
            text: 'Note saved successfully',
            icon: 'success',
            confirmButtonText: 'Ok',

            customClass: {
                confirmButton: 'bg-red-500',
                cancelButton: 'bg-red-500',

            }

        })
    }
}