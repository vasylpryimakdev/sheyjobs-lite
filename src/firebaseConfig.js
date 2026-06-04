import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCYFbXDtyg-4UNwfvC8y4gyUw2CQP4Qd0",
  authDomain: "sheyjobs-lite-22292.firebaseapp.com",
  projectId: "sheyjobs-lite-22292",
  storageBucket: "sheyjobs-lite-22292.firebasestorage.app",
  messagingSenderId: "1017083038328",
  appId: "1:1017083038328:web:ea53139d68d32eb82b3b8d",
  measurementId: "G-4K6Y5557N7",
};

export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
