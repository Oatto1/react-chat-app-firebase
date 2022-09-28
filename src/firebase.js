import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAOxhmXHF19DUQRs8IUWF9NMpxsIu39IQI",
  authDomain: "react-chat-app-firebase-e3ab7.firebaseapp.com",
  projectId: "react-chat-app-firebase-e3ab7",
  storageBucket: "react-chat-app-firebase-e3ab7.appspot.com",
  messagingSenderId: "606533582458",
  appId: "1:606533582458:web:5a42b0abae3e453b64c5c3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const analytics = getAnalytics(app);