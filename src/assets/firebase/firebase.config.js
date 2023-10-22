// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside firebase config', import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "assignment-9--website.firebaseapp.com",
  projectId: "assignment-9--website",
  storageBucket: "assignment-9--website.appspot.com",
  messagingSenderId: "288301308052",
  appId: "1:288301308052:web:43ab57f0c3f74cd8babc81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;