import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDrlChc0BnNeafoTLNNRMzumfALirQUnPw",
    authDomain: "multiplayer-car-racing-game34.firebaseapp.com",
    databaseURL: "https://multiplayer-car-racing-game34.firebaseio.com",
    projectId: "multiplayer-car-racing-game34",
    storageBucket: "multiplayer-car-racing-game34.appspot.com",
    messagingSenderId: "96941193770",
    appId: "1:96941193770:web:9ffc1a3f8c3c475899e153"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();