import {types} from "../types/types";

export const uiSetError = (err) => (
    {
        type: types.uiSetError,
        payload: err
    }
)
export const uiRemoveError = () => (
    {
        type: types.uiRemoveError,
    }
)


/*
    2. Crear dos acciones que modifiquen nuestro state en el uiReducer (no reciben argumentos)
    uiStartLoading: debe de colocar la propiedad loading en true
    uiFinishLoading: debe de colocar la propiedad loading en false
* */

export const uiStartLoading = () => ({
    type: types.uiStartLoading
})

export const uiFinishLoading = () => ({
    type: types.uiFinishLoading
})


export const uiAnimation = (classNames) => (
    {
        type: types.uiAnimation,
        payload: {
            classNames
        }
    }
)


