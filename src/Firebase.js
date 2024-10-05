import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCad8-MbwRx7v0EVnET4Y-uZEpy4mR9Pqc",
  authDomain: "tharkuri-tech.firebaseapp.com",
  databaseURL: "https://tharkuri-tech-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tharkuri-tech",
  storageBucket: "tharkuri-tech.appspot.com",
  messagingSenderId: "350840121184",
  appId: "1:350840121184:web:93c646e7b78fc8dafee005",
  measurementId: "G-X1EMN3B0Q1"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);