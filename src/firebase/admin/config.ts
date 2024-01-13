import { initializeApp, getApps } from "firebase-admin/app";
import {credential} from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

const adminConfig = {
  credential: credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY
  }),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL 
};

if (getApps().length <= 0) {
  initializeApp(adminConfig);
}

export const db = getFirestore();

