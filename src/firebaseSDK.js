// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGl9E0ZWvpo662A9Ndw1VYU-OydQaoFxQ",
    authDomain: "todo-81801.firebaseapp.com",
    projectId: "todo-81801",
    storageBucket: "todo-81801.appspot.com",
    messagingSenderId: "151955100573",
    appId: "1:151955100573:web:8558848b5dedbaf14f1574"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase};