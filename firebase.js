// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ8XWusEsb9iEJZ_-OYsJ318g2fe7i0ew",
  authDomain: "react-native-todo-app-c332a.firebaseapp.com",
  projectId: "react-native-todo-app-c332a",
  storageBucket: "react-native-todo-app-c332a.firebasestorage.app",
  messagingSenderId: "122098846972",
  appId: "1:122098846972:web:9b29050d28ef86e9729b79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
