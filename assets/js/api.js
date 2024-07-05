import { collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';
import { db } from "./firestore.js"

export const addToFirestore = async (entityName, data)=>{
    try {
        const collectionning = collection(db, entityName)
        await addDoc(collectionning,data)
        console.log("Toutes les compétences ont été ajoutées à Firestore.");

    } catch (error) {
        console.error("Erreur lors de l'ajout des compétences : ", error);

    }
}

export const getAllData = async (entityName)=>{
    const collectionData = collection(db , entityName)
    const dataSnapshot = await getDocs(collectionData)
    const dataList = dataSnapshot.docs.map(doc => doc.data())
    return dataList
}