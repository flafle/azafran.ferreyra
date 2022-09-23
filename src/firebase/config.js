// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg6C7ScA98M75xC9rBI1mo6rgMdPYj_VI",
  authDomain: "ecommerce-ferreyra.firebaseapp.com",
  projectId: "ecommerce-ferreyra",
  storageBucket: "ecommerce-ferreyra.appspot.com",
  messagingSenderId: "96254498652",
  appId: "1:96254498652:web:0f8caf53cc9a26ebbfd399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);