import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const envs = process.env;

// Firebase config
const firebaseConfig = {
  apiKey: envs.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: envs.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: envs.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: envs.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envs.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId: envs.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: envs.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
