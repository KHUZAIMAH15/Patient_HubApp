// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

import { getAuth,onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {getDatabase,ref,push,} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

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
const database = getDatabase();

const PatientName = document.getElementById("PatientName");
const doctorSelect = document.getElementById("doctorSelect");
const appointmentDate = document.getElementById("appointmentDate");
const appointmentTime = document.getElementById("appointmentTime");
const description = document.getElementById("description");
let uid;

let init = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      uid = user.uid;
    } else {
      console.log("user is not logged In");
      window.location.href = "../login/login.html";
    }
  });
};

init();

window.PatientDtbtn= () => {
  let Patient_Data = {
    // PatientName:PatientName.value,
    doctorSelect:doctorSelect.value,
    appointmentDate:appointmentDate.value,
    appointmentTime:appointmentTime.value,
    description:description.value,
  };
  console.log(Patient_Data);
  alert("Appointment  successfully!");

  const links_Ref = ref(database, `patientDatanode/${uid}`); 
  push(links_Ref, Patient_Data);
};
