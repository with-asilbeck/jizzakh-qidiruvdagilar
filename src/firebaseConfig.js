import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCynBRKBzlImmgBUIQQD12aJMa_uUI0yK8",
  authDomain: "insearch-base.firebaseapp.com",
  projectId: "insearch-base",
  storageBucket: "insearch-base.firebasestorage.app",
  messagingSenderId: "880985476641",
  appId: "1:88098554764641:web:9a69d69c6b83382806dd60",
  measurementId: "G-P9JSZZV4WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);