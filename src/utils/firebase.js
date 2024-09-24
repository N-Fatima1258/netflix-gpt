// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBhBlnYH4AuT7jKaUNX9m4Fb0cJkihXpY",
  authDomain: "netflix-gpt-9df02.firebaseapp.com",
  projectId: "netflix-gpt-9df02",
  storageBucket: "netflix-gpt-9df02.appspot.com",
  messagingSenderId: "547827073108",
  appId: "1:547827073108:web:e76894e7a4624e11516dc1",
  measurementId: "G-YLJ0PQQKJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);   
export const auth = getAuth();