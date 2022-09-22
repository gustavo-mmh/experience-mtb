// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAN3IFMINVWw6965cJdLI4VSz1G-rZQY7s",
    authDomain: "experience-mtb-6574d.firebaseapp.com",
    projectId: "experience-mtb-6574d",
    storageBucket: "experience-mtb-6574d.appspot.com",
    messagingSenderId: "234905696198",
    appId: "1:234905696198:web:507cabef5feab4f2a224c7",
    measurementId: "G-H6KM6MYNDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;