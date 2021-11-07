import { db } from 'Firebase/config';
import React, { useEffect, useState } from 'react';
import "./Comment.scss";
import CommentInfo from './components/Info';
import CommentUser from './components/User';
import CommentInputReply from './components/InputReply';
import CommentListReply from './components/ListReply';

function Comment({ gameId }) {
    const [totalComment, setTotalComment] = useState(0);
    const [listCommentFrist, setListCommentFirst] = useState([]);

    useEffect(() => {
        setListCommentFirst([]);
        const unsubcribe = db.collection("comments")
            .orderBy('createdAt', 'desc')
            .where("gameId", "==", gameId)
            .where("isFirst", "==", true)
            .limit(10)
            .onSnapshot((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                })
                setListCommentFirst(data);
            });

        return unsubcribe;
    }, [gameId]);

    useEffect(() => {
        setTotalComment(0);
        const unsubcribe = db.collection("quantityCmt")
            .doc(gameId)
            .onSnapshot(doc => {
                if (doc.exists) {
                    setTotalComment(doc.data().quantity);
                } else {
                    setTotalComment(0);
                }
            })
        return unsubcribe;
    }, [gameId])


    return (
        <div className="comment">
            <div className="comment-heading">{totalComment} bình luận</div>
            <CommentUser gameId={gameId} />

            <div className="comment-main">
                {listCommentFrist.map(commentFirst => (
                    <div key={commentFirst.id} className="comment-group">
                        <div className="comment-item">
                            <div className="comment-item__container">
                                <img className="comment-item__avatar" src={commentFirst.photoURL} alt="avatar" />
                                <CommentInfo comment={commentFirst} />
                            </div>
                            <CommentInputReply
                                gameId={gameId}
                                comment={commentFirst}
                                commentFirst={commentFirst}
                            />
                        </div>
                        <CommentListReply
                            gameId={gameId}
                            comment={commentFirst}
                            commentFirst={commentFirst}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;