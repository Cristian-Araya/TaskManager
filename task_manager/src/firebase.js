import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6p2mshQqyil0flaNrdwguJ3jC0rLGdCI",
    authDomain: "taskmanagerbycristianaraya.firebaseapp.com",
    projectId: "taskmanagerbycristianaraya",
    storageBucket: "taskmanagerbycristianaraya.appspot.com",
    messagingSenderId: "697125942445",
    appId: "1:697125942445:web:1cebdfcc189f7656aa4224"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}