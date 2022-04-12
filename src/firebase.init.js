// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwsPDF9dG8nZ2jgECTmOvpLzaj4C_iN0",
  authDomain: "hotel-booking-system-93bd8.firebaseapp.com",
  projectId: "hotel-booking-system-93bd8",
  storageBucket: "hotel-booking-system-93bd8.appspot.com",
  messagingSenderId: "119650658371",
  appId: "1:119650658371:web:474300a691eecf14534cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;