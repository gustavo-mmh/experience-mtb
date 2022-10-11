import { getDownloadURL, ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
export function getUrlImage(storage, img, fotoCard) {
    let starsRef = ref(storage, `images/${img}`);
    // Get the download URL
    getDownloadURL(starsRef).then((url) => {
        // Insert url into an <img> tag to "download"
        fotoCard.setAttribute('src', url);
    })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
}