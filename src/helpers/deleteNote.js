import Swal from "sweetalert2";
import { notesDelete } from "../actions/notes";


export const deleteNote = (dispatch) => {
    Swal.fire({
        title: 'Do you want to delete the note?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        icon: 'warning',
        confirmButtonColor: '#111111',
        cancelButtonColor: '#EAB308',
        background: '#1F2937',
        color: '#F9FAFB'

    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(notesDelete())
            Swal.fire({
                title: 'Deleted',
                text: 'Note deleted successfully',
                icon: 'success',
                confirmButtonText: 'Ok',

            })
        }
    })
}
