import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";




const firebaseConfig = {

  apiKey: "AIzaSyD5r-h3po_KYaahNUlnz_PYyz5hbfhz0JE",

  authDomain: "miniblog-9f906.firebaseapp.com",

  projectId: "miniblog-9f906",

  storageBucket: "miniblog-9f906.appspot.com",

  messagingSenderId: "353310001722",

  appId: "1:353310001722:web:b192fcf4341832cfaa8303"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
