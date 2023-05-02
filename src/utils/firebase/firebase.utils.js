import {initializeApp,} from 'firebase/app';
import {getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDHyv23Q7gO2IcmNGpyTqP9XtmM3k8G9no",
    authDomain: "whats-for-dinner-users.firebaseapp.com",
    projectId: "whats-for-dinner-users",
    storageBucket: "whats-for-dinner-users.appspot.com",
    messagingSenderId: "837325478231",
    appId: "1:837325478231:web:7770a0bcb9fbd84cda0612"

};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth =getAuth();

export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation ={})=> {
    if (!userAuth) return;
const userDocRef = doc( db, 'users', userAuth.uid);

const userSnapshot = await getDoc(userDocRef);

if(!userSnapshot.exists()) {
    const {displayName, email} =userAuth;
    const createdAt = new Date();


try {
    await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
    });

} catch(error) {
    console.log('error creating user', error.message);
}
}
return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password)=> {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

};