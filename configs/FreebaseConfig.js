// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// import { getAuth } from "firebase/auth/web-extension";
import { getAuth } from 'firebase/auth/web-extension'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV-YbbUDdszoGwGuyo1zwbcjls-3byEhc",
  authDomain: "my-projects-e5dbb.firebaseapp.com",
  projectId: "my-projects-e5dbb",
  storageBucket: "my-projects-e5dbb.firebasestorage.app",
  messagingSenderId: "794605442309",
  appId: "1:794605442309:web:c690a60c2132544320136c",
  measurementId: "G-F98CM35KV0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
