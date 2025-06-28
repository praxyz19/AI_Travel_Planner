import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
 



const firebaseConfig = {
  apiKey: "AIzaSyAV-YbbUDdszoGwGuyo1zwbcjls-3byEhc",
  authDomain: "my-projects-e5dbb.firebaseapp.com",
  projectId: "my-projects-e5dbb",
  storageBucket: "my-projects-e5dbb.appspot.com",
  messagingSenderId: "794605442309",
  appId: "1:794605442309:web:c690a60c2132544320136c",
  measurementId: "G-F98CM35KV0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
