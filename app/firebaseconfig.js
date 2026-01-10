
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCORRUR7YozgqjUMB_bQGiAznXPzCwKcnc",
  authDomain: "hotelbooking-32f63.firebaseapp.com",
  projectId: "hotelbooking-32f63",
  storageBucket: "hotelbooking-32f63.firebasestorage.app",
  messagingSenderId: "850616576850",
  appId: "1:850616576850:web:841d2ed7c3e425c2fca88b",
  measurementId: "G-ZGVMET81RT"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
