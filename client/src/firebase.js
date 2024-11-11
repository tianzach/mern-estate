// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-78458.firebaseapp.com",
  projectId: "mern-estate-78458",
  storageBucket: "mern-estate-78458.firebasestorage.app",
  messagingSenderId: "141356246782",
  appId: "1:141356246782:web:056a5d1dc85cf3868e27af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);