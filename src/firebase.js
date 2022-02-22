import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDld1EVqLDtdCvpWrFahKDJDezRQousuEs",
    authDomain: "clone-aa4c0.firebaseapp.com",
    projectId: "clone-aa4c0",
    storageBucket: "clone-aa4c0.appspot.com",
    messagingSenderId: "1069496208773",
    appId: "1:1069496208773:web:e7b7fb1d13e0a0042d88ec",
    measurementId: "G-KNJ338Y08Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
export {db,auth}