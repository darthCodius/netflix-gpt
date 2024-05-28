// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgyXpIlEa6b4emuhUfCY90gdmgIsLfmkU",
  authDomain: "netflixgpt-3b0ca.firebaseapp.com",
  projectId: "netflixgpt-3b0ca",
  storageBucket: "netflixgpt-3b0ca.appspot.com",
  messagingSenderId: "105483179561",
  appId: "1:105483179561:web:a86676555a293fd816ee38",
  measurementId: "G-RH2FRH3EZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
