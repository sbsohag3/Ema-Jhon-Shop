// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBucwHi1-lRMmPlI7Py05FcBV7cJxO1VKk",
  authDomain: "ema-john-simple-8d3dc.firebaseapp.com",
  projectId: "ema-john-simple-8d3dc",
  storageBucket: "ema-john-simple-8d3dc.appspot.com",
  messagingSenderId: "886568094801",
  appId: "1:886568094801:web:efb7c89fc9bc073f57fc70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;