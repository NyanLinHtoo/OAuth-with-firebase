// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6G3VyRZPfmMbjv5zJJzrczv_V8kD0t68",
  authDomain: "talkspace-919c3.firebaseapp.com",
  projectId: "talkspace-919c3",
  storageBucket: "talkspace-919c3.appspot.com",
  messagingSenderId: "858363793708",
  appId: "1:858363793708:web:2fcfd058fd5b250d50dc89",
  measurementId: "G-RCGELTSBWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
