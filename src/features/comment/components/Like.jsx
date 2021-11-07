import cmtApi from 'apis/cmtApi';
import firebase, { db } from 'Firebase/config';
import useUser from 'hooks/useUser';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';

function CommentLike({ comment }) {
    const { userId } = useUser();
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

        }
        setLoadingLike(false);
    };

    return (
        <div
            onClick={handleLike}
            className={`comment-item__features-like ${comment?.likes?.includes(userId) && 'comment-item__features-like--active'}`}
        >
            {loadingLike ? <ReactLoading type="spinningBubbles" width={20} height={20} /> : 'Thích'}
        </div>
    );
}

export default CommentLike;