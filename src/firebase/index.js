// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuEKzOCN7zJho33FcxDfUOIVanl5pO3Gg",
  authDomain: "todo-test-7ecbf.firebaseapp.com",
  projectId: "todo-test-7ecbf",
  storageBucket: "todo-test-7ecbf.appspot.com",
  messagingSenderId: "583055388063",
  appId: "1:583055388063:web:8701ca0c0f28391fe3e1aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {
  db
}