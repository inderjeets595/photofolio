// import processEnvVar from "../utils/processEnvVar.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Zn7dgaej7-CwKdzzReIyUrOPBBkEwb8",
  authDomain: "photofolio-c3cb7.firebaseapp.com",
  projectId: "photofolio-c3cb7",
  storageBucket: "photofolio-c3cb7.firebasestorage.app",
  messagingSenderId: "849425902288",
  appId: "1:849425902288:web:b3b0fba702937d84010cd5",
  measurementId: "G-GL5NGRJ0E6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};























