// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3VLoDZ6-HkGJ5Vj-UnKsR_Hz6tNAHDNs",
    authDomain: "tugerente-bf977.firebaseapp.com",
    projectId: "tugerente-bf977",
    storageBucket: "tugerente-bf977.appspot.com",
    messagingSenderId: "358802278404",
    appId: "1:358802278404:web:a338d4a63683eda5ad8d51",
    measurementId: "G-TTKFPPZJ62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
