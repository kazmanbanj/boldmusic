import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3ctwTzbC43_HhJk-BZSAENpzKExOx_eU",
    authDomain: "vuezmuics.firebaseapp.com",
    projectId: "vuezmuics",
    storageBucket: "vuezmuics.appspot.com",
    messagingSenderId: "919736267685",
    appId: "1:919736267685:web:da4b77d9bd84d56991ee4c"


//     VUE_APP_apiKey=AIzaSyA3ctwTzbC43_HhJk-BZSAENpzKExOx_eU
// VUE_APP_authDomain=vuezmuics.firebaseapp.com
// VUE_APP_projectId=vuezmuics
// VUE_APP_storageBucket=vuezmuics.appspot.com
// VUE_APP_messagingSenderId=919736267685
// VUE_APP_appId=1:919736267685:web:da4b77d9bd84d56991ee4c

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