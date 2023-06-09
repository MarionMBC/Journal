import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { uiFinishLoading, uiStartLoading } from "./ui";
import Swal from "sweetalert2";

export const signInWithEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(uiStartLoading())
                Swal.fire('Success', 'Welcome', 'success')
            }).catch(e => {
                dispatch(uiFinishLoading())
                Swal.fire('Error', e.message, 'error')
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    background: '#1F2937',
                    color: '#F9FAFB'
                })
            })
    }
}


export const signUpWithEmailPasswordName = (displayName, email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading())
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName })
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e)
                Swal.fire('Error', e.message, 'error')
                dispatch(uiFinishLoading())
            })
    }
}


export const accountLogOut = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const logout = () => ({
    type: types.logout
})