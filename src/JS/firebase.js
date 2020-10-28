import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsuX90gyGRXGyP4EsFVbM7XSIhcV6riN8",
  authDomain: "gstfiling-8cf5f.firebaseapp.com",
  databaseURL: "https://gstfiling-8cf5f.firebaseio.com",
  projectId: "gstfiling-8cf5f",
  storageBucket: "gstfiling-8cf5f.appspot.com",
  messagingSenderId: "600583302908",
  appId: "1:600583302908:web:6f6d54e4728a797091f179",
  measurementId: "G-KX4WR2DZEE",
};

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firebaseApp };
export default firebase;
