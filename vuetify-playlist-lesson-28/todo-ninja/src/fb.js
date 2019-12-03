import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBIThGIrJ07meUTJshfcsalx5Jh6ldGSig",
  authDomain: "todo-aff80.firebaseapp.com",
  databaseURL: "https://todo-aff80.firebaseio.com",
  projectId: "todo-aff80",
  storageBucket: "todo-aff80.appspot.com",
  messagingSenderId: "168073454652",
  appId: "1:168073454652:web:d3a9dfba6e0c08d6f80f39",
  measurementId: "G-FKR635Z4YZ"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default db;


 
