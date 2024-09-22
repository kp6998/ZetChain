import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1ljPSy8qBPLFbPmoDFZaXIPEY6k9PPXg",
  authDomain: "tharkuritech-9ea93.firebaseapp.com",
  databaseURL: "https://tharkuritech-9ea93-default-rtdb.firebaseio.com/",
  projectId: "tharkuritech-9ea93",
  storageBucket: "tharkuritech-9ea93.appspot.com",
  messagingSenderId: "1077493591220",
  appId: "1:1077493591220:web:0fc19af4ff4365198d3be1",
  measurementId: "G-XQZ09CMTC2"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);