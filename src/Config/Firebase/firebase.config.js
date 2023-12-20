// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSfEhdpTUNPHOJd6CrWfYBjkxmI7iKu78",
  authDomain: "job-task-project.firebaseapp.com",
  projectId: "job-task-project",
  storageBucket: "job-task-project.appspot.com",
  messagingSenderId: "163020714140",
  appId: "1:163020714140:web:b3ed8f486e5b0b77c9bd59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);