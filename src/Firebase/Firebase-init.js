// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANqjc1_ab3y5VEuih0SHJuYD5NMkzoW24",
    authDomain: "ema-john-simple-ad71e.firebaseapp.com",
    projectId: "ema-john-simple-ad71e",
    storageBucket: "ema-john-simple-ad71e.appspot.com",
    messagingSenderId: "542719265874",
    appId: "1:542719265874:web:8a58edd1fdc90d86cc638b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;