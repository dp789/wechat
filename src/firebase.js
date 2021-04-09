import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBWAgsJ7LCgPTg5_DMluZjVhR1J4LwMKvY",
  authDomain: "whatsapp-clone-dp.firebaseapp.com",
  projectId: "whatsapp-clone-dp",
  storageBucket: "whatsapp-clone-dp.appspot.com",
  messagingSenderId: "156507008826",
  appId: "1:156507008826:web:c4673d227f7ccc753eea03",
  measurementId: "G-MQN6N4PJ9R"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;