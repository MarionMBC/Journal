// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAVJu4FyRLw4QVleQ_QEANYuPh1dbbSeRU",
    authDomain: "journal-b2631.firebaseapp.com",
    projectId: "journal-b2631",
    storageBucket: "journal-b2631.appspot.com",
    messagingSenderId: "663020780345",
    appId: "1:663020780345:web:3d3d8d83616a49a6f1c6e8"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
