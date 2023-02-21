// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdY8fqKmm6C1Ue-r1Z_Ec-Cn7sF4s7pQ",
  authDomain: "tracking-1c80c.firebaseapp.com",
  projectId: "tracking-1c80c",
  storageBucket: "tracking-1c80c.appspot.com",
  messagingSenderId: "345129603255",
  appId: "1:345129603255:web:d18ee6f481d35d3465bd32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);