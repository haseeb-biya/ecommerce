import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';
    
const firebaseConfig = {
    apiKey: "AIzaSyDjU0MLDiVqMO3nnnNNvmwmXFqsaUrsnms", 
    authDomain: "ecomm-db-ae08f.firebaseapp.com",  
    projectId: "ecomm-db-ae08f", 
    storageBucket: "ecomm-db-ae08f.appspot.com", 
    messagingSenderId: "749524910364",   
    appId: "1:749524910364:web:4598d3304c72d5db683ad9",  
    measurementId: "G-P76HZHSJYE"
}; 
 


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;