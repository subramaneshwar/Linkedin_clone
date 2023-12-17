// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRtm6ndROQDJRj7jcPn7sWQbE9bAloZsM",
  authDomain: "newsocial-44880.firebaseapp.com",
  projectId: "newsocial-44880",
  storageBucket: "newsocial-44880.appspot.com",
  messagingSenderId: "1031298967705",
  appId: "1:1031298967705:web:c2afa3ccdcfc1fa37d3008"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)








// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyBSx2rt9zOAhCr1IzWkYVvYgNjl0EBo5AU",
//   authDomain: "web-app-4d4e0.firebaseapp.com",
//   projectId: "web-app-4d4e0",
//   storageBucket: "web-app-4d4e0.appspot.com",
//   messagingSenderId: "1010814015410",
//   appId: "1:1010814015410:web:f3ee196eae3c6a6ffe36ab"
// };

// const firebaseapp = firebase.initializeApp(firebaseConfig)
// const db = firebaseapp.firestore()
// const auth = firebase.auth()
// const storage = firebase.storage()
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db,auth,storage,provider  };

