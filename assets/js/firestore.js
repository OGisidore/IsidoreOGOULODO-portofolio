
//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
//  import { getFirestore,} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';
//  import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js';


//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyCvsxesUPaPwe8_N62Gx8-8bALRxsD-fxs",
//    authDomain: "ogoulodo-isidore.firebaseapp.com",
//    databaseURL: "https://ogoulodo-isidore-default-rtdb.europe-west1.firebasedatabase.app",
//    projectId: "ogoulodo-isidore",
//    storageBucket: "ogoulodo-isidore.appspot.com",
//    messagingSenderId: "143611260032",
//    appId: "1:143611260032:web:b88001deffe55d2eaaca65",
//    measurementId: "G-QVC28T9SV0"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
// export const db = getFirestore(app)
// const storage = getStorage(app);

// export const loadFiles = async (elm) => {
//   console.log(elm);

//   await getDownloadURL(ref(storage,  elm ))
//   .then((url) => {
//     //`url` is the download URL for 'images/stars.jpg'

//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();
//     return url

//     // Or inserted into an <img> element
//     // const img = document.getElementById('myimg');
//     // img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     console.error("erreor", error);
//   });

  
// };

// // const displayFiles = (urls) => {
// //   const filesContainer = document.getElementById('files-container');
// //   filesContainer.innerHTML = ''; 

// //   urls.forEach(url => {
// //     const fileElement = document.createElement('video'); 
// //     fileElement.src = url;
// //     fileElement.controls = true;
// //     filesContainer.appendChild(fileElement);
// //   });
// // };

