import Swal from "sweetalert2";
import { notesDelete} from "../actions/notes";


export const deleteNote = (dispatch) => {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        customClass: {
            confirmButton: 'bg-yellow-400',
            cancelButton: 'bg-yellow-400',
            popup: 'bg-gray-800',
        },
    }).then((result) => {
        dispatch(notesDelete())
        Swal.fire('Nota eliminada!', '', 'success')
    })
}
