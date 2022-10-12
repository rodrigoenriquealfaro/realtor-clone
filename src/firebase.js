// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFvWf-4sBYbjzsNitK0hSmn21h9hdyhCE",
    authDomain: "realtor-clone-f08ba.firebaseapp.com",
    projectId: "realtor-clone-f08ba",
    storageBucket: "realtor-clone-f08ba.appspot.com",
    messagingSenderId: "796752227232",
    appId: "1:796752227232:web:72fe642170c44b433352c5"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()