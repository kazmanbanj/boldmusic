import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

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
const storage = firebase.storage();

db.enablePersistence().catch((error) =>  {
    console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
    auth,
    db,
    usersCollection,
    songsCollection,
    commentsCollection,
    storage
};