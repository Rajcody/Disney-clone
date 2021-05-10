import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSMQuw87XWKvIuae17uRxzNugj8bOUHO4",
    authDomain: "disneyplus-2e6cb.firebaseapp.com",
    projectId: "disneyplus-2e6cb",
    storageBucket: "disneyplus-2e6cb.appspot.com",
    messagingSenderId: "466516389782",
    appId: "1:466516389782:web:64ec5316b2e3c4c3c437b7",
    measurementId: "G-311J6LZ7M6"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =  firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export{  auth, provider, storage} ;
  export default db;