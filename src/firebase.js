// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWDqzeNhFLE17KAJByR9rXFB7c8v0RTl0",
  authDomain: "discord-mars.firebaseapp.com",
  projectId: "discord-mars",
  storageBucket: "discord-mars.appspot.com",
  messagingSenderId: "387369355486",
  appId: "1:387369355486:web:3ebcf07c76fbf4324cda4f",
  measurementId: "G-0DC74K8NL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();