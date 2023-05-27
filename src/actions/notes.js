import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { imageUpload } from "../helpers/fileUpload";



export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})



export const editActiveNote = (title, body) => ({
    type: types.notesEdit,
    payload: {
        title,
        body
    }
})


export const notesAdd = (title, body, url = '') => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
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
    type: types.notesActiveDelete
})


export const notesDelete = () => {
    return async (dispatch, getState) => {
        const { id } = getState().notes.active
        const { uid } = getState().auth
        await db.doc(`${uid}/journal/notes/${id}`).delete()
        dispatch(deleteNote(id))
        dispatch(activeNoteDelete())

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: {
        id
    }
})

export const updateNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!note.url) {
            delete note.url
        }
        const noteToFirestore = { ...note }
        delete noteToFirestore.id

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
        dispatch(noteUpdated(note.id, noteToFirestore));


        Swal.fire({
            title: 'Saved',
            text: 'Note saved successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#EAB308',
            allowOutsideClick: false,
            background: '#1F2937',
            backdrop: 'rgba(0,0,0,0.5)',
            color: '#F9FAFB'
        })
    }
}

export const noteUpdated = (id, note) => {
    return {
        type: types.notesUpdate,
        payload: {
            id,
            note: {
                ...note,
                id
            }
        }
    }
}





export const startUpload = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes
        const fileURL = await imageUpload(file)
        Swal.fire({
            title: 'Uploading',
            text: 'Please wait...',
            allowOutsideClick: false,
            allowEnterKey: false,
          
            didOpen: () => {
                Swal.showLoading()
            }
        })

        activeNote.url = fileURL;
        dispatch(updateNote(activeNote))
        Swal.close();

    }
}

export const updateURL = (url) => (
    {
        type: types.notesFileURL,
        payload: {
            url
        }
    }
)