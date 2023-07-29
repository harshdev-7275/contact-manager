// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCxuw5zLOLlZOxtNId67bHwXqqOnTVFxg",
  authDomain: "contact-manager-aa022.firebaseapp.com",
  projectId: "contact-manager-aa022",
  storageBucket: "contact-manager-aa022.appspot.com",
  messagingSenderId: "177266596731",
  appId: "1:177266596731:web:2ef96231f6cee82067fbde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);