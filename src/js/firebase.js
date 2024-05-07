import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFOAfXzRAeNA9Xjx3S3PizynRIoK6Y8xA",
  authDomain: "e-world-ae0cf.firebaseapp.com",
  projectId: "e-world-ae0cf",
  storageBucket: "e-world-ae0cf.appspot.com",
  messagingSenderId: "555945793734",
  appId: "1:555945793734:web:42831d975e86d0d8a59fc7",
  measurementId: "G-LNZSZ46ED5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);