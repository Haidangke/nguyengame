import firebase, { db } from "Firebase/config";
import { v4 as uuidv4 } from 'uuid';

const user = JSON.parse(localStorage.getItem('user'));
const userId = user?.userId;
const displayName = user?.displayName;
const photoURL = user?.photoURL;

const cmtApi = {
    addCmt(comment) {
        return db.collection('comments').add({
            userId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            roomId: uuidv4(),
            displayName,
            photoURL,
            like: 0,
            likes: [],
            ...comment,
        });
    },
    increaseCmt(idGame, proterty) {
        return db.collection('comments')
            .doc(idGame)
            .update({ [proterty]: firebase.firestore.FieldValue.increment(1) });
    },

    decreaseCmt(idGame, proterty) {
        return db.collection('comments')
            .doc(idGame)
            .update({ [proterty]: firebase.firestore.FieldValue.increment(-1) });
    },

}

export default cmtApi;