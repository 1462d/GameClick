// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsRoW-82-0USTcxEKxg4mOSX7EPiC4BNI",
  authDomain: "gameclick-3542d.firebaseapp.com",
  databaseURL: "https://gameclick-3542d-default-rtdb.firebaseio.com",
  projectId: "gameclick-3542d",
  storageBucket: "gameclick-3542d.firebasestorage.app",
  messagingSenderId: "802237840120",
  appId: "1:802237840120:web:fe368494c997349238990d",
  measurementId: "G-857B19VPR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);