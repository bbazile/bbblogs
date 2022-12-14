// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKoLEElD0kCV0kwh5R-ass84JIVHaJ_hg",
  authDomain: "bbblogs-7a637.firebaseapp.com",
  projectId: "bbblogs-7a637",
  storageBucket: "bbblogs-7a637.appspot.com",
  messagingSenderId: "724361417277",
  appId: "1:724361417277:web:4cc0ed8c15e06f1eb11054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();