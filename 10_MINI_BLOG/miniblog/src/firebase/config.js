// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABMVLEgJndsKc2nkEN-XyGKYAWLz7FYXU",
  authDomain: "miniblog-46181.firebaseapp.com",
  projectId: "miniblog-46181",
  storageBucket: "miniblog-46181.appspot.com",
  messagingSenderId: "895941227979",
  appId: "1:895941227979:web:0eceb8b654495eebaa724e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* banco do firebase */
const db = getFirestore(app)

export { db };