import firebase, { db } from "Firebase/config";


const notifyApi = {
    addNotify(notify, sender) {
        return db.collection('notifys').add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...notify,
            ...sender
        })
    }
}

export default notifyApi;