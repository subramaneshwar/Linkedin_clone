// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBF8Tnbr8-5_kEOgxdTtBgzg-Gd9VwthPA",
  authDomain: "linkedin-clone-80cae.firebaseapp.com",
  projectId: "linkedin-clone-80cae",
  storageBucket: "linkedin-clone-80cae.appspot.com",
  messagingSenderId: "175279017770",
  appId: "1:175279017770:web:93967c3df316831719d853"
};

// const firebaseapp = initializeApp(firebaseConfig)
// const db = getFirestore();
// const auth = getAuth();
// const app = initializeApp(firebaseConfig);
const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
export { db,auth,storage,provider  };

