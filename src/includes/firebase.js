import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VUE_APP_apiKey,
    authDomain: import.meta.env.VUE_APP_authDomain,
    projectId: import.meta.env.VUE_APP_projectId,
    storageBucket: import.meta.env.VUE_APP_storageBucket,
    messagingSenderId: import.meta.env.VUE_APP_messagingSenderId,
    appId: import.meta.env.VUE_APP_appId
};

export default firebase.initializeApp(firebaseConfig);