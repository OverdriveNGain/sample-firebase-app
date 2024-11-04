import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/app.jsx";
import "./index.css";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
initializeApp(firebaseConfig);

export const firestore = getFirestore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
