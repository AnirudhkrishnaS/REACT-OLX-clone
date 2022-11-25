import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAIeysHwJSqzKdDjRynB700XJBQ9l39GRs",
    authDomain: "olx-clone-90450.firebaseapp.com",
    projectId: "olx-clone-90450",
    storageBucket: "olx-clone-90450.appspot.com",
    messagingSenderId: "135418477098",
    appId: "1:135418477098:web:d03d6c51e0a9f592d22153",
    measurementId: "G-DQ1099KT98"
  };

  export default firebase.initializeApp(firebaseConfig);

