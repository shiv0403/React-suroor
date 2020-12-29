import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC_EmnLWi48tLdrxxgWRC--bjRnRm62eW8",
  authDomain: "suroor-3cfe6.firebaseapp.com",
  projectId: "suroor-3cfe6",
  storageBucket: "suroor-3cfe6.appspot.com",
  messagingSenderId: "133236413386",
  appId: "1:133236413386:web:a109dec360cd194222f533",
  measurementId: "G-CH55XVM9M5",
});

export const auth = app.auth();
export default app;

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
