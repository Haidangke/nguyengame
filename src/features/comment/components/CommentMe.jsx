import cmtApi from 'apis/cmtApi';
import React, { useEffect, useState } from 'react';

function CommentMe({ id }) {
    const [comment, setComment] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));
    const photoURL = user?.photoURL;

    const handleAddComment = () => {
        if (!comment) return;
        setComment("");
        cmtApi.addCmt({
            gameId: id,
            content: comment,
            isFirst: true,
            quantity: 0
        });
    }

    useEffect(() => {
        setComment("");
    }, [id]);

    return (
        user ?
            <div className="comment-me">
                <div className="comment-me__container">
                    <img src={photoURL} alt="avatar" className="comment-me__avatar" />
                    <input
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Bạn nghĩ gì về trò chơi này"
                        className="comment-me__input"
                    />
                </div>
                <div className="comment-me__button">
                    <div onChange={() => setComment("")} className="comment-me__button-cancel">
                        Hủy
                    </div>
                    <div
                        onClick={handleAddComment}
                        className={`comment-me__button-push ${comment && "comment-me__button-push--hightlight"}`}
                    >
                        Bình luận
                    </div>
                </div>
            </div> :
            <div className="comment-me">
                <h1>Đăng nhập để bình luận !</h1>
            </div>
    );
}

export default CommentMe;