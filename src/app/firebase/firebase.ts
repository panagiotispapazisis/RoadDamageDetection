import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import 'firebase/storage';
import 'firebase/database'
import React from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyB-uwgJzLb2fdbvyeNJKhQ721SNCHniz4M",
  authDomain: "road-damage-detection-39c6d.firebaseapp.com",
  databaseURL: "https://road-damage-detection-39c6d-default-rtdb.firebaseio.com",
  projectId: "road-damage-detection-39c6d",
  storageBucket: "road-damage-detection-39c6d.appspot.com",
  messagingSenderId: "1020923004995",
  appId: "1:1020923004995:web:69b7a16e44d8326d302cf6",
  measurementId: "G-VTXY4Y28EZ"
};
firebase.firestore.setLogLevel('debug');

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();
const perf = firebase.performance();
const db = firebase.firestore();
const storage = firebase.storage().ref();
const RealTimeDbImages = firebase.database().ref('imageUrls')

const FirebaseContext = React.createContext(null);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export {
  db,
  storage,
  perf,
  analytics,
  FirebaseContext,
  googleProvider,
  facebookProvider,
  microsoftProvider,
  twitterProvider,
  githubProvider,
  RealTimeDbImages
};
export default FirebaseApp;
