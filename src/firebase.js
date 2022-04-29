import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCocoRNFxkWR37vGMw-E2weZUgNRrHJaDY",
  authDomain: "unipampeando.firebaseapp.com",
  projectId: "unipampeando",
  storageBucket: "unipampeando.appspot.com",
  messagingSenderId: "990704197825",
  appId: "1:990704197825:web:8902d2fb48577a770d7440"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export { auth, provider};
  export default db;