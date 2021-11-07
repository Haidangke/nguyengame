import firebase, { db } from "Firebase/config";
import { v4 as uuidv4 } from 'uuid';

const cmtApi = {
    addCmt(comment, user) {
        return db.collection('comments').add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            roomId: uuidv4(),
            like: 0,
            likes: [],
            ...comment,
            ...user
        })
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

    increaseTotalCmt(gameId) {
        return db.collection("quantityCmt").doc(gameId).get().then(doc => {
            if (!doc.exists) {
                db.collection("quantityCmt").doc(gameId).set({
                    gameId,
                    quantity: 1
                })

            } else {
                db.collection("quantityCmt").doc(gameId).update({
                    quantity: firebase.firestore.FieldValue.increment(1)
                });
            }
        })
    }

}

export default cmtApi;