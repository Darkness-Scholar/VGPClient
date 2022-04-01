import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQWg12fxJJPyzWsXfwdmbckmQCqsB7BOg",
  authDomain: "vgamepay.firebaseapp.com",
  projectId: "vgamepay",
  storageBucket: "vgamepay.appspot.com",
  messagingSenderId: "690157579739",
  appId: "1:690157579739:web:bdf416a6e8e7f786224bfe",
  measurementId: "G-CSQNT3S6CF"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage}