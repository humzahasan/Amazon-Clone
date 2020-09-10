import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCBc68khMFKpGPeT6P6OhHWqMld2Af4lqk',
  authDomain: 'amaazon-clone.firebaseapp.com',
  databaseURL: 'https://amaazon-clone.firebaseio.com',
  projectId: 'amaazon-clone',
  storageBucket: 'amaazon-clone.appspot.com',
  messagingSenderId: '1068076093799',
  appId: '1:1068076093799:web:22d53288a0e9af92409fc2',
  measurementId: 'G-BLTHD2BL2Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
