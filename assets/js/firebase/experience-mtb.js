import { collection, doc, getDoc, getDocs, getFirestore, setDoc, query, where, updateDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { getStorage, ref, uploadBytesResumable, deleteObject } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import app from './app.js';
const db = getFirestore(app)
const expereinceMTBCollection = collection(db, 'experience-mtb')

export async function subscribeToExperienceMtb(subscription, ID) {
    // const docRef = await addDoc(expereinceMTBCollection, subscription) // ID Aleatório
    const docRef = await setDoc(doc(expereinceMTBCollection, ID), subscription);
    return docRef;
}

export async function getExperienceMtbdocs(uid) {
    const docRef = doc(db, "experience-mtb", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
export async function getExperienceMtbdocsID() {
    // Get a list of cities from your database
    const experienceMtbSnapshot = await getDocs(expereinceMTBCollection);
    const docsID = experienceMtbSnapshot.docs.map(doc => doc.id);
    return docsID;
}
export async function getCollection(documento) {
    const documentoQuery = query(expereinceMTBCollection, where("documento", "==", documento));
    const querySnapshot = await getDocs(documentoQuery);
    const docsData = querySnapshot.docs.map(doc => doc.data());
    return docsData;
}
export async function updateCollection(documento, subscription) {
    debugger
    const experienceMTBRef = doc(db, "experience-mtb", documento);

    // const docsData = querySnapshot.docs.map(doc => doc.data());
    // let docData = new Usuario(subscription);
    // console.log(subscription);
    await updateDoc(experienceMTBRef, subscription);

}
// -----------------------------
export function uploadImagem(file, imgRef, metadata) {

    const storage = getStorage(app);
    const storageRef = ref(storage, `${imgRef}`);
    uploadBytesResumable(storageRef, file, metadata);
}
export function deleteImage(imgRef) {
    const storage = getStorage(app);
    // Create a reference to the file to delete
    const imageRef = ref(storage, `${imgRef}`);

    // Delete the file
    deleteObject(imageRef).then(() => {
        // console.log('Imagem deletada');
    }).catch((error) => {
        // Uh-oh, an error occurred!
        // console.log(error);
    });
}

