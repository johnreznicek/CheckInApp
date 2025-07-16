// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ This must be here!

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQxJn98mtbLP-8VdGIHZvCcpQtml7PJ68",
  authDomain: "learntoskatecheckin.firebaseapp.com",
  projectId: "learntoskatecheckin",
  storageBucket: "learntoskatecheckin.firebasestorage.app",
  messagingSenderId: "1094233758775",
  appId: "1:1094233758775:web:dce52f536ead1df70033b2",
  measurementId: "G-YJK0KE2G6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export Firestore Instance 
export const db = getFirestore(app); 