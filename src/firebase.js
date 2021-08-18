import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDv0ItGEO9qxydw3h-zy99PNhE2qQPl2dw",
  authDomain: "netflix-clone-afad3.firebaseapp.com",
  projectId: "netflix-clone-afad3",
  storageBucket: "netflix-clone-afad3.appspot.com",
  messagingSenderId: "984221450174",
  appId: "1:984221450174:web:d1f33b56876da325d6c3ef",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
