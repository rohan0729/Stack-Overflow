import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBWe6-plo5orbp2Ko9bYmlvYaUEZjU_TII",
  authDomain: "stack-over-flow-ecc0c.firebaseapp.com",
  projectId: "stack-over-flow-ecc0c",
  storageBucket: "stack-over-flow-ecc0c.appspot.com",
  messagingSenderId: "775952086798",
  appId: "1:775952086798:web:e4a15025c3e7e8d9fe495f",
  measurementId: "G-XW70NY1P5N"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
