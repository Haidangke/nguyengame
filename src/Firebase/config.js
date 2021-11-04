import firebase from 'firebase/app';
import 'firebase/analytics'
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAg5O1qyo2PICx1aJxNPqZ0frBlt0p6UWE",
    authDomain: "appgameke.firebaseapp.com",
    projectId: "appgameke",
    storageBucket: "appgameke.appspot.com",
    messagingSenderId: "574450856353",
    appId: "1:574450856353:web:4bbdca6167f4d34e7b5be0",
    measurementId: "G-9JQZ5NTBK2"
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8081');
}


export { db, auth, analytics };

export default firebase;