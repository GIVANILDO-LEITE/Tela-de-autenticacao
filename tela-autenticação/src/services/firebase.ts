
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyADWCOapTVcNlyRq9ShKAzsvY_rOlieOuA",
  authDomain: "auth-yt-4a7f7.firebaseapp.com",
  projectId: "auth-yt-4a7f7",
  storageBucket: "auth-yt-4a7f7.appspot.com",
  messagingSenderId: "885610595960",
  appId: "1:885610595960:web:d09b0770c6b3f772de0f8d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);