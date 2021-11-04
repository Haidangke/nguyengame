import cmtApi from 'apis/cmtApi';
import notifyApi from 'apis/notifyApi';
import firebase, { db } from 'Firebase/config';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
function LikeComment({ comment, gameId }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.userId;
    const displayName = user?.displayName;

    const [loadingLike, setLoadingLike] = useState(false);
    const handleLike = async () => {
        if (loadingLike) return;

        setLoadingLike(true);
        if (comment.likes.includes(userId)) {
            await db.collection("comments").doc(comment.id).update({
                likes: firebase.firestore.FieldValue.arrayRemove(userId)
            });
            await cmtApi.decreaseCmt(comment.id, "like");

        } else {
            await db.collection("comments").doc(comment.id).update({
                likes: firebase.firestore.FieldValue.arrayUnion(userId)
            });
            await cmtApi.increaseCmt(comment.id, "like");

            if (comment.id !== userId) {
                await notifyApi.addNotify({
                    receiver: comment.userId,
                    receiverPhoto: comment.photoURL,
                    address: `/detail/${gameId}`,
                    content: `<span>${displayName}</span>đã thích bình luận của bạn`,
                });
            };
        }
        setLoadingLike(false);
    };

    return (
        <div
            onClick={handleLike}
            className={`comment-item__features-like ${comment?.likes?.includes(userId) && 'comment-item__features-like--active'}`}
        >
            {loadingLike ? <ReactLoading type="spinningBubbles" color="white" width={20} height={20} /> : 'Thích'}
        </div>
    );
}

export default LikeComment;