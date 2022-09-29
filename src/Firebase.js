import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const auth = getAuth(); //권한

// auth.onAuthStateChanged((user) => {
//   //사용가능한 유저인지 확인
//   if (user) {
//     //사용가능한 유저이면
//     signInWithEmailAndPassword(auth, "mail_address", "password") //정보를 토대로 로그인
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else {
//     //사용가능한 유저가 아니면
//     createUserWithEmailAndPassword(auth, "mail_address", "password")
//       .then((userCredential) => {
//         //사용자를 추가
//         signInWithEmailAndPassword(auth, "mail_address", "password") //추가된 사용자를 토대로 로그인
//           .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// });
