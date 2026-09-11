import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "blog-app-1f957.firebaseapp.com",
  projectId: "blog-app-1f957",
  storageBucket: "blog-app-1f957.firebasestorage.app",
  messagingSenderId: "1020628772779",
  appId: "1:1020628772779:web:034cd7e6fa4054dac914ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
