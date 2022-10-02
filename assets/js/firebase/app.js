// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// Configuração do PROJETO EXPERIENCE-MTB
// const firebaseConfig = {
//     apiKey: "AIzaSyAN3IFMINVWw6965cJdLI4VSz1G-rZQY7s",
//     authDomain: "experience-mtb-6574d.firebaseapp.com",
//     projectId: "experience-mtb-6574d",
//     storageBucket: "experience-mtb-6574d.appspot.com",
//     messagingSenderId: "234905696198",
//     appId: "1:234905696198:web:507cabef5feab4f2a224c7",
//     measurementId: "G-H6KM6MYNDX"
// };
// Configuração do TESTE EXPERIENCE-MTB
const firebaseConfig = {
    apiKey: "AIzaSyDv3j2aozfUWo7dMc8ZCY3Ljfln1KKUZFE",
    authDomain: "testes-experience-mtb.firebaseapp.com",
    projectId: "testes-experience-mtb",
    storageBucket: "testes-experience-mtb.appspot.com",
    messagingSenderId: "497905105128",
    appId: "1:497905105128:web:17f766e6d7fc2e7cb8f15d",
    measurementId: "G-NFZ0BG3C0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;