
//import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyC1_qDX3hKuCpYZaZZOSP55Gy1wnWizDyw",
    authDomain: "e-commercecoder-612c1.firebaseapp.com",
    projectId: "e-commercecoder-612c1",
    storageBucket: "e-commercecoder-612c1.appspot.com",
    messagingSenderId: "557086754877",
    appId: "1:557086754877:web:341802f33b4643ff0dc254"
};
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();