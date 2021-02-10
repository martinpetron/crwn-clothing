import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCuM6bcMa2mbalKlzpcxKBHeo8xPTkOiw",
    authDomain: "crwn-db-97cc8.firebaseapp.com",
    projectId: "crwn-db-97cc8",
    storageBucket: "crwn-db-97cc8.appspot.com",
    messagingSenderId: "829735095072",
    appId: "1:829735095072:web:f138a3d0ff76c6836aa545"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

