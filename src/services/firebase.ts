import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-eIbo0XIqVUSaszkiYRnR44Pn7zbsN5s",
  authDomain: "vibelab-store.firebaseapp.com",
  projectId: "vibelab-store",
  storageBucket: "vibelab-store.firebasestorage.app",
  messagingSenderId: "613770147834",
  appId: "1:613770147834:web:193a63d3be313a0a645643"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const db = getFirestore(app);

export default app;
