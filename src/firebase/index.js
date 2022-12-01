// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADURUAzluxaTl1malY8FhdDVq0sGrcOWw",
    authDomain: "auth-practice-97042.firebaseapp.com",
    projectId: "auth-practice-97042",
    storageBucket: "auth-practice-97042.appspot.com",
    messagingSenderId: "982564117790",
    appId: "1:982564117790:web:927fb2f29a3cde33507d0f",
    measurementId: "G-8KJ0WB05TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)