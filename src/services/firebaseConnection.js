import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBWoHHDGNqzCzUmHN19tHySqDRUB8Qn1a0",
    authDomain: "chamados-470d2.firebaseapp.com",
    projectId: "chamados-470d2",
    storageBucket: "chamados-470d2.appspot.com",
    messagingSenderId: "950556858965",
    appId: "1:950556858965:web:206a172983282316ab12dc",
    measurementId: "G-NPPVH1NMYL"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  
  export { auth, db, storage };