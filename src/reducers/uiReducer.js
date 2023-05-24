import {types} from "../types/types";

const initialState = {
    loading: false,
    msgError: null
}

const animationInitialState = {
    animation: true,
    classNames: null
}


export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}









export const uiAnimationReducer = (state = animationInitialState , action) => {
    switch (action.type){
        case types.uiAnimation:
            return {
                ...state,
                classNames: action.payload.classNames
            }
        case types.uiRemoveAnimation:
            return {
                ...state,
                classNames: null
            }
        default:
            return state
    }
}