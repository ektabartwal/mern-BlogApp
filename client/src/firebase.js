// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-41de3.firebaseapp.com",
  projectId: "mern-blog-41de3",
  storageBucket: "mern-blog-41de3.appspot.com",
  messagingSenderId: "118754111304",
  appId: "1:118754111304:web:74eba4690d1ff8729d8d7d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
