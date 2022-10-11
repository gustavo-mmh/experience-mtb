import { collection, doc, getDoc, getDocs, getFirestore, setDoc, query, where, updateDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { getStorage, ref, uploadBytesResumable, deleteObject } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { loginCad } from '../login/index.js';
import { formCadastro, loading, loginDocumento, txtDocumento, txtPais, txtSenha } from '../ui.js';
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
export async function getCollection(documento, pais) {

    const documentoQuery = query(expereinceMTBCollection, where("documento", "==", documento), where("pais", "==", pais));
    const querySnapshot = await getDocs(documentoQuery);
    const docsData = querySnapshot.docs.map(doc => doc.data());
    return docsData;
}
export async function updateCollection(documento, subscription) {
    const experienceMTBRef = doc(db, "experience-mtb", documento);

    // const docsData = querySnapshot.docs.map(doc => doc.data());
    // let docData = new Usuario(subscription);
    // console.log(subscription);
    await updateDoc(experienceMTBRef, subscription);

}
// -----------------------------
export function uploadImagem(file, imgRef, metadata, redirec) {

    const storage = getStorage(app);
    const storageRef = ref(storage, `${imgRef}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');

            switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                // ...
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            switch (redirec) {
                case 'modal':
                    // $("#cadastroModal").modal("hide")
                    // $("#loginModal").modal("show")
                    loginCad(txtDocumento.value, txtSenha.value, txtPais.value)
                    loading.hidden = true
                    break;
                case 'redirect':
                    window.location.href = "index.html";
                    break;
                case 'reload':
                    window.location.reload(1);
                    break;
            }
        }
    );
}
export function uploadImagemCad(file, imgRef, metadata, doc, psw, pais) {

    const storage = getStorage(app);
    const storageRef = ref(storage, `${imgRef}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');

            switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                // ...
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            loginCad(doc, psw, pais)
            loading.hidden = true
        }
    );


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
export function urlDownloadImg() {

    // Create a reference with an initial file path and name
    const storage = getStorage(app);
    const pathReference = ref(storage, `${imgRef}`);

    // Create a reference from a Google Cloud Storage URI
    const gsReference = ref(storage, `gs://bucket/${imgRef}`);

    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
    // const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');
}

