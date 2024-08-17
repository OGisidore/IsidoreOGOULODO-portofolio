// import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
// import { getDownloadURL, ref } from "firebase/storage";
// import { db, storage } from "./firestore.js";

// export const addToFirestore = async (entityName, data)=>{
//     try {
//         const collectionning = collection(db, entityName)
//         await addDoc(collectionning,data)
//         console.log("Toutes les donnees ont été ajoutées à Firestore.");

//     } catch (error) {
//         console.error("Erreur lors de l'ajout des donnees : ", error);

//     }
// }

// export const getAllData = async (entityName)=>{
//     try {
//         const collectionData = collection(db , entityName)
//     const dataSnapshot = await getDocs(collectionData)
//     if (!dataSnapshot.empty) {
//         const docData = dataSnapshot.docs.map(doc => doc.data());
//         console.log("my data is:", docData);
//       } else {
//         console.log("No documents found in the collection");
//       }
//     } catch (error) {
//         console.error("Erreur lors de l'ajout de la recuperation des donnees : ", error);      
//     }
    
// }
// // const ListenToAdDoc = ()=>{
// //     onSnapshot(specialOffer)
// // }

// export const getMediaUrlFromFirebaseStorage  = async(path)=>{
//     const dataRef = ref(storage, path )
//     try {
//         return await getDownloadURL(dataRef)
        
//     } catch (error) {
//         console.error("error erreur lors de la recuperation de l'url : " , error);
        
//     }

// }

// getAllData("Essais")
// // getMediaUrlFromFirebaseStorage()

import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "./firestore.js";

export const addToFirestore = async (entityName, data) => {
  try {
    console.log(`Adding to Firestore: ${entityName}`, data);
    const collectionRef = collection(db, entityName);
    await addDoc(collectionRef, data);
    console.log("Toutes les données ont été ajoutées à Firestore.");
  } catch (error) {
    console.error("Erreur lors de l'ajout des données : ", error);
  }
}

export const getAllData = async (entityName) => {
  try {
    console.log(`Getting all data from Firestore: ${entityName}`);
    const collectionRef = collection(db, entityName);
    const dataSnapshot = await getDocs(collectionRef);
    const docs = dataSnapshot.docs.map(doc => doc.data());
    console.log("Les données récupérées sont :", docs);
    return docs;
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
  }
}

export const getMediaUrlFromFirebaseStorage = async (path) => {
  try {
    console.log(`Getting media URL from Firebase Storage: ${path}`);
    const dataRef = ref(storage, path);
    const url = await getDownloadURL(dataRef);
    console.log(`URL récupérée: ${url}`);
    return url;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'URL : ", error);
  }
}

// Test des fonctions
getAllData("Essais");
addToFirestore("Essais", {
  name: "Isidore",
  age: 23,
  profession: "agent de voyage"
});
console.clear()