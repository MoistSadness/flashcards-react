// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: "flash-cards-73dd8.firebaseapp.com",
  projectId: "flash-cards-73dd8",
  storageBucket: "flash-cards-73dd8.appspot.com",
  messagingSenderId: "1043134886139",
  appId: "1:1043134886139:web:7fbf6a215cebdf7ac5405e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);