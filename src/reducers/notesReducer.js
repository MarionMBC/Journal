import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null,

}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesEdit:
            return {
                ...state,
                active: {
                    ...state.active,
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload.notes]
            }
        case types.notesActiveDelete:
            return {
                ...state,
                active: null,
            }

        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }
        case types.notesDelete:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }

            case types.notesFileURL:
                return {
                    ...state,
                    active: {
                        ...state.active,
                        url: action.payload.url
                    }
                }

        default: return state
    }

}