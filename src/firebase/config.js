import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjQhZ8Rxk-85ff5t4EQPH2YHdobjsuHXg",
  authDomain: "microproyecto-2-c7a0e.firebaseapp.com",
  projectId: "microproyecto-2-c7a0e",
  storageBucket: "microproyecto-2-c7a0e.appspot.com",
  messagingSenderId: "638432167898",
  appId: "1:638432167898:web:4c51ae1f4f7851f5f6a2e3",
  measurementId: "G-N863H4F7J4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });