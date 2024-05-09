// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvYcrquMb2XgBp9_D0d-WTZzMPoMsCDo4",
  authDomain: "savvyfix-f43f7.firebaseapp.com",
  projectId: "savvyfix-f43f7",
  storageBucket: "savvyfix-f43f7.appspot.com",
  messagingSenderId: "1097872056706",
  appId: "1:1097872056706:web:db83de68c547f62d9caf9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);