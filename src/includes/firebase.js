import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VUE_APP_apiKey,
    authDomain: import.meta.env.VUE_APP_authDomain,
    projectId: import.meta.env.VUE_APP_projectId,
    storageBucket: import.meta.env.VUE_APP_storageBucket,
    messagingSenderId: import.meta.env.VUE_APP_messagingSenderId,
    appId: import.meta.env.VUE_APP_appId
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
    auth,
    db,
    usersCollection
};