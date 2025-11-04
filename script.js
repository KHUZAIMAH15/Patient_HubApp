  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js"; 
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js"; 

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
  const  data_base = getDatabase();

const loginLink = document.getElementById("loginLink");
const signUpLink = document.getElementById("signUpLink");
const appointment = document.getElementById("appointment");
const logoutBtn = document.getElementById("logoutBtn");
const bookingbtn =document.getElementById("booking")
let uid ;

let init = () => {
    onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      uid = user.uid;
      getData(); // track by uid
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      loginLink.style.display = "none";
      signUpLink.style.display = "none";
      logoutBtn.style.display = "inline-block";
      appointment.style.display = "inline-block";
      bookingbtn.style.display = "inline-block";
    } else {
        console.log("User is Not Logged In");
        // User is signed out
        loginLink.style.display = "inline-block";
        signUpLink.style.display = "inline-block";
        logoutBtn.style.display = "none";
        appointment.style.display = "none";
        bookingbtn.style.display = "none";
    }
});
};

init();

window.logout = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.replace("/index.html");
    })
    .catch((error) => {
        console.log(error);
        // An error happened.
    });
};
let getData = () => {
  const path = ref(data_base, `patientDatanode/${uid}`);
  get(path)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
};

