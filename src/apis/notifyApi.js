import firebase, { db } from "Firebase/config";

const user = JSON.parse(localStorage.getItem('user'));
const userId = user?.userId;

const notifyApi = {
    addNotify(notify) {
        return db.collection('notifys').add({
            sender: userId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...notify
        })
    }
}

export default notifyApi;