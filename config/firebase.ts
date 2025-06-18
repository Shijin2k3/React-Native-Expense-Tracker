// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTt8dFuCX_n_Xv1pjv-iYbvYX-tPsgGnI",
  authDomain: "expense-tracker-fae05.firebaseapp.com",
  projectId: "expense-tracker-fae05",
  storageBucket: "expense-tracker-fae05.firebasestorage.app",
  messagingSenderId: "1005388626183",
  appId: "1:1005388626183:web:003177ddb013aec7912da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth
export const auth=initializeAuth(app,{
  persistence:getReactNativePersistence(AsyncStorage)
})
//db
export const firestore=getFirestore(app)