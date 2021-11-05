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
        setTotalComment(0);
        setListCommentFirst([]);

        const unsubcribe = db.collection("comments")
            .orderBy('createdAt', 'desc')
            .where("gameId", "==", gameId)
            .where("isFirst", "==", true)
            .onSnapshot((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                })
                setListCommentFirst(data);

                const totalComment = data.reduce((a, b) => a + b.quantity + 1, 0);
                setTotalComment(totalComment);
            });

        return unsubcribe;
    }, [gameId]);


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