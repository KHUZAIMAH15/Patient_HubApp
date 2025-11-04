// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

// add from firebase Password Authentication
import {getAuth, createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyC1vUxv9ouK9qxpODfPn47H90NWDEatLXE",
    authDomain: "hospital-mgt-app.firebaseapp.com",
    databaseURL: "https://hospital-mgt-app-default-rtdb.firebaseio.com",
    projectId: "hospital-mgt-app",
    storageBucket: "hospital-mgt-app.firebasestorage.app",
    messagingSenderId: "379046236856",
    appId: "1:379046236856:web:fb05f2f2a4a75c90b6da4d",
    measurementId: "G-M7QTHQDGRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(); 

let userName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");

window.signupbtn = () => {
  let obj = {
    userName: userName.value,
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
      console.log(res);
      window.location.href = "/login/login.html";
      alert("Creating Account....");
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
