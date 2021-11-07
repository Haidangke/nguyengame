import cmtApi from 'apis/cmtApi';
import useUser from 'hooks/useUser';
import React, { useEffect, useState } from 'react';

function CommentUser({ gameId }) {
    const [comment, setComment] = useState("");
    const { userId, displayName, photoURL, isLoggedIn } = useUser();

    const handleAddComment = async () => {
        if (comment) {
            setComment("");
            await cmtApi.addCmt({
                gameId,
                content: comment,
                isFirst: true,
                quantity: 0,
            }, { userId, displayName, photoURL });

            await cmtApi.increaseTotalCmt(gameId);
        }

    }

    useEffect(() => {
        setComment("");
    }, [gameId]);

    return (
        isLoggedIn ?
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
                    <div onClick={() => setComment("")} className="comment-me__button-cancel">
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

export default CommentUser;