// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCDy7Y75SpGZGosu-fQQUq0bGQXLroYWXg",
  authDomain: "mystock-53974.firebaseapp.com",
  projectId: "mystock-53974",
  storageBucket: "mystock-53974.appspot.com",
  messagingSenderId: "176349794067",
  appId: "1:176349794067:web:5553345b9570fd084114e6",
  measurementId: "G-RW7WYSSFHT"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
