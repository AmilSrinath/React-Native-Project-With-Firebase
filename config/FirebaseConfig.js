// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyZ6-f3sbH4m4Ru2FbM683yE0rPE8rECc",
  authDomain: "business-listing-app-3157a.firebaseapp.com",
  projectId: "business-listing-app-3157a",
  storageBucket: "business-listing-app-3157a.appspot.com",
  messagingSenderId: "267448410188",
  appId: "1:267448410188:web:cf16f4edba5becb5ca94e9",
  measurementId: "G-SSZWGDK4DK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);