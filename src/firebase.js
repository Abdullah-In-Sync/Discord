// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const analytics = getAnalytics(app);
const db = app.firestore();
const auth = app.auth();
const provider = new app.auth.GoogleAuthProvider();
console.log(db, auth, provider);
export { auth, provider};
export default db;