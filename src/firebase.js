// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxznxW1487Mljwxil6O4B2s9DWaEJ5Ay4",
  authDomain: "podcast-app-react-2b75d.firebaseapp.com",
  projectId: "podcast-app-react-2b75d",
  storageBucket: "podcast-app-react-2b75d.appspot.com",
  messagingSenderId: "174661516954",
  appId: "1:174661516954:web:6da1ee7336fbbcec896923",
  measurementId: "G-J3YBXS53Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);
const auth=getAuth(app);

export {auth,db,storage};
