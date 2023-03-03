// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdu6C69YoSbAiuyKvhyh4emqfwvGoU8Z4",
  authDomain: "otp-project-6dd6c.firebaseapp.com",
  projectId: "otp-project-6dd6c",
  storageBucket: "otp-project-6dd6c.appspot.com",
  messagingSenderId: "151699965151",
  appId: "1:151699965151:web:f6f9b519a49a1a07d0956a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth= getAuth(app)
 export default auth;
