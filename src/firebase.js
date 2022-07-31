// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDG8QNrLjA0zOGvZo63FnuDmz2irS92kU",
  authDomain: "whatsapp-clone-2e0b3.firebaseapp.com",
  projectId: "whatsapp-clone-2e0b3",
  storageBucket: "whatsapp-clone-2e0b3.appspot.com",
  messagingSenderId: "763764341824",
  appId: "1:763764341824:web:e782294a14f638e30db3a5",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //google authentication

export { auth, provider, db };
