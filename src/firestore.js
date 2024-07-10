import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"



  const firebaseConfig = {
    apiKey: "AIzaSyCbXmJjWfhWeueARVIxoj0BF9xDEfmryEs",
    authDomain: "isidore-d3726.firebaseapp.com",        
    projectId: "isidore-d3726",
    storageBucket: "isidore-d3726.appspot.com",
    messagingSenderId: "793221425159",
    appId: "1:793221425159:web:67e74b5b0ff8384ce8e2a2",
    measurementId: "G-4XPXJ4X6HE"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app)
  const auth = getAuth(app)
  onAuthStateChanged(auth, user=>{
    if (user != null) {
        console.log("logged in");
    } else {
        console.log("logged in");
        
    }
  })


