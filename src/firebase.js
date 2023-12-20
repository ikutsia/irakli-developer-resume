// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK31473SKpBkGofonXJUqILffndvSRric",
  authDomain: "irakli-developer-resume.firebaseapp.com",
  projectId: "irakli-developer-resume",
  storageBucket: "irakli-developer-resume.appspot.com",
  messagingSenderId: "535958146305",
  appId: "1:535958146305:web:77aaa5a725d1b0d9cb1f00",
  measurementId: "G-NYE24HCDES",
};

let app;
let auth;
let db;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  // Handle initialization error appropriately

  // Rethrow the error to make consumers aware of the issue
  throw error;
}

export { auth, db };

/*
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the necessary Firebase modules if needed
const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
*/
