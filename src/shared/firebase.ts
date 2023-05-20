import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot, serverTimestamp, QuerySnapshot, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const ref = collection(db, "travelers")

// ------------------------------Example--------------------------------
// const docId: string = "";
// const docRef = doc(db, 'travelers', docId);

// const data = {
//   name: "hello world",
//   profileId: "3",
//   photo: "",
//   email: "",
//   destination: null
// }

// ----- add document in  data base -----
// addDoc(ref, data)
// .then(data => console.log(data.id));
// --------------------------------------

// ---Reading collection data from the database----
// onSnapshot(query(ref), (querySnapshot) => {
//   querySnapshot.forEach(data => console.log(data.data()))
// });
// -----------------------------------------------

//------reding for a single collection document---
// const queryWhere = query(ref, where("profileId", "==", "1"));
// onSnapshot(queryWhere, (querySnapshot) => {
//   querySnapshot.forEach(data => console.log(data.data()))
// });

// ------------------------------------------------
// ----- update document in  data base---- 
// setDoc(docRef, { ...data, name: "Update name" }, { merge: true })
// .then(() => console.log("the document has been updated"));
// --------------------------------------

//------- delete document in data base---
// deleteDoc(docRef)
// .then(()=> console.log("the document has been deleted"));
// -------------------------------------

export default app;
