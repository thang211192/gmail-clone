import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjFGKMo2fu0HypYc_ehNxLIhsj0FDr8B8",
    authDomain: "clone-e825d.firebaseapp.com",
    projectId: "clone-e825d",
    storageBucket: "clone-e825d.appspot.com",
    messagingSenderId: "425917199868",
    appId: "1:425917199868:web:2a19fd8161f9a7bac9ee79",
    measurementId: "G-353PZCE2VB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }