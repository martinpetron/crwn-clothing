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

// Async function because we're making an API request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //GET the info
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //CREATE the info
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('EEEEEEEEEEEEEERROR CREATING USER', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

