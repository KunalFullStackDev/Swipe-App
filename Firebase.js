import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgbJfSEKwRBK5n0-jOYKR2XDSuwSB4GO4",
    authDomain: "swipe-app-6f1d8.firebaseapp.com",
    projectId: "swipe-app-6f1d8",
    storageBucket: "swipe-app-6f1d8.appspot.com",
    messagingSenderId: "137451542937",
    appId: "1:137451542937:web:9dc5f49de835c1c514db08",
    measurementId: "G-KSRDLXD5Y5"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
