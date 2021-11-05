import firebase from 'firebase/app';
import 'firebase/analytics'
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "appgameke.firebaseapp.com",
    projectId: "appgameke",
    storageBucket: "appgameke.appspot.com",
    messagingSenderId: "574450856353",
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-9JQZ5NTBK2"
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

// if (window.location.hostname === 'localhost') {
//     db.useEmulator('localhost', '8081');
// }


export { db, auth, analytics };

export default firebase;