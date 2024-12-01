// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQXrspbjoPctHNwm_A3LH93ZwmI7tqWoQ",
  authDomain: "coffee-store-a300d.firebaseapp.com",
  projectId: "coffee-store-a300d",
  storageBucket: "coffee-store-a300d.firebasestorage.app",
  messagingSenderId: "831243429434",
  appId: "1:831243429434:web:299827aee6963d3f173703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;