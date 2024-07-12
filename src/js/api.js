import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "./firestore.js";

export const addToFirestore = async (entityName, data)=>{
    try {
        const collectionning = collection(db, entityName)
        await addDoc(collectionning,data)
        console.log("Toutes les donnees ont été ajoutées à Firestore.");

    } catch (error) {
        console.error("Erreur lors de l'ajout des donnees : ", error);

    }
}

export const getAllData = async (entityName)=>{
    try {
        const collectionData = collection(db , entityName)
    const dataSnapshot = await getDocs(collectionData)
    if (dataSnapshot.exists()) {
        var docData = dataSnapshot.docs()
        console.log("my data is :", docData );
        
    }
    } catch (error) {
        console.error("Erreur lors de l'ajout de la recuperation des donnees : ", error);      
    }
    
}
// const ListenToAdDoc = ()=>{
//     onSnapshot(specialOffer)
// }

export const getMediaUrlFromFirebaseStorage  = async(path)=>{
    const dataRef = ref(storage, path )
    try {
        return await getDownloadURL(dataRef)
        
    } catch (error) {
        console.error("error erreur lors de la recuperation de l'url : " , error);
        
    }

}

getAllData("Essais")
// getMediaUrlFromFirebaseStorage()
addToFirestore("Essais", {
    name : "Isidore",
    Age : 23,
    Proffession : "agent de voyage"
})