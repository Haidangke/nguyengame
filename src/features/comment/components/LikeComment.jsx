import cmtApi from 'apis/cmtApi';
import firebase, { db } from 'Firebase/config';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
function LikeComment({ comment }) {
    const userId = JSON.parse(localStorage.getItem('user'))?.userId;

    const [loadingLike, setLoadingLike] = useState(false);
    const handleLike = async () => {
        if (loadingLike) return;

        setLoadingLike(true);
        if (comment.likes.includes(userId)) {
            await cmtApi.decreaseCmt(comment.id, "like");
            await db.collection("comments").doc(comment.id).update({
                likes: firebase.firestore.FieldValue.arrayRemove(userId)
            });

        } else {
            await cmtApi.increaseCmt(comment.id, "like");
            await db.collection("comments").doc(comment.id).update({
                likes: firebase.firestore.FieldValue.arrayUnion(userId)
            });
        }
        setLoadingLike(false);
    };

    return (
        <div
            onClick={handleLike}
            className={`comment-item__features-like ${comment?.likes?.includes(userId) && 'comment-item__features-like--active'}`}
        >
            {loadingLike ?
                <ReactLoading type="spinningBubbles" color="white" width={20} height={20} /> : 'Thích'
            }
        </div>
    );
}

export default LikeComment;