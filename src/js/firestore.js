import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage } from "firebase/storage"
      import 'dotenv/config'
      // require('dotenv').config();




        const firebaseConfig = {
          apiKey: process.env.API_KEY ,
          authDomain: process.env.AUTH_DOMAIN ,        
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID
        };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const storage = getStorage()
  export const db = getFirestore(app)
  const auth = getAuth(app)
  onAuthStateChanged(auth, user=>{
    if (user != null) {
        console.log("logged in");
    } else {
        console.log("logged in");
        
    }
  })


