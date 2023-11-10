import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
    signOut,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
    listAll,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClyxTkSuLNGhTSp9ChghMeHd3mhNlm17Y",
    authDomain: "test-jsp-44946.firebaseapp.com",
    projectId: "test-jsp-44946",
    storageBucket: "test-jsp-44946.appspot.com",
    messagingSenderId: "538910372899",
    appId: "1:538910372899:web:645d8393ca01ab68622d96",
    measurementId: "G-4CPVP40VDV"
};

// Initialize Firebasee
export const firebaseAapp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseAapp);
export const auth = getAuth();

const signupForm = document.getElementById("signup-form")
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = (e.target[0].value);
    let password = (e.target[1].value)


    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("New user is created");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
})

const loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = (e.target[0].value);
    let password = (e.target[1].value)


    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("User has logged in");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
})
import a from "./sub.js"


console.log(a);