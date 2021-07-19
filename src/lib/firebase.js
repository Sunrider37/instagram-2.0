import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyCOlvMk2JSED7wSjo6WVQZSftgyOtrwG8k",
    authDomain: "instagram-965e3.firebaseapp.com",
    projectId: "instagram-965e3",
    storageBucket: "instagram-965e3.appspot.com",
    messagingSenderId: "158212862773",
    appId: "1:158212862773:web:dc8194cf5b278e9991d27c"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export {firebase, FieldValue }; 