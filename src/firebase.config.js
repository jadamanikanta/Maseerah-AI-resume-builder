// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5X2hQuOLHsItAFsHPt_QzekwJDPHbKD4",
  authDomain: "maseerah-ai.firebaseapp.com",
  projectId: "maseerah-ai",
  storageBucket: "maseerah-ai.appspot.com",
  messagingSenderId: "348818673561",
  appId: "1:348818673561:web:ae197da78f7d4b350d4d08",
  measurementId: "G-X6YEXZYERL"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };