import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsuf7RZV5bLLdZVC8mBlEMTJ5NjTokKrE",
  authDomain: "holas-d619d.firebaseapp.com",
  projectId: "holas-d619d",
  storageBucket: "holas-d619d.appspot.com",
  messagingSenderId: "728840354967",
  appId: "1:728840354967:web:3c6913d021020513bb3dd2",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
