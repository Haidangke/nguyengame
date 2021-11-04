import cmtApi from 'apis/cmtApi';
import notifyApi from 'apis/notifyApi';
import React, { Fragment, useEffect, useState } from 'react';
import formatDate from 'utils/formatTime';
import LikeComment from './LikeComment';

function InputCommentReply({ id, comment, commentFirst }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.userId;
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;

    const [isInputReply, setIsInputReply] = useState(false);
    const [cmtReply, setCmtReply] = useState("");

    const handleReply = async () => {
        const idGame = commentFirst.id;

        const roomId = comment.roomId;
        const receiverName = comment.displayName;
        const receiverId = comment.userId;
        const receiverUrl = comment.photoURL;

        if (receiverId !== userId) {
            await notifyApi.addNotify({
                receiver: receiverId,
                receiverUrl,
                address: `/detail/${id}`,
                content: `<span>${displayName}</span>đã nhắc tới bạn trong một bình luận`,
            })
        };

        await cmtApi.addCmt({
            gameId: id,
            content: cmtReply,
            isFirst: false,
            roomId,
            receiver: receiverName !== displayName ? receiverName : ""
        });

        await cmtApi.increaseCmt(idGame, "quantity");
        setCmtReply("");
    };

    useEffect(() => {
        setIsInputReply(false);
        setCmtReply("");

    }, [id]);

    return (
        <Fragment>
            <div className="comment-item__features">
                {user && <Fragment>
                    <LikeComment comment={comment} />
                    <div
                        onClick={() => setIsInputReply(!isInputReply)}
                        className="comment-item__features-reply"
                    >
                        Trả lời
                    </div>
                </Fragment>}
                <div className="comment-item__features-dates">
                    {formatDate(comment?.createdAt?.seconds)}
                </div>
            </div>

            {isInputReply && <div className="comment-me--reply">
                <div className="comment-me__container">
                    <img src={photoURL} alt="" className="comment-me__avatar" />
                    <input
                        autoFocus
                        value={cmtReply}
                        onChange={(e) => setCmtReply(e.target.value)}
                        placeholder={`Trả lời ${comment.displayName}`}
                        className="comment-me__input"
                    />
                </div>
                <div onClick={() => setIsInputReply(!isInputReply)} className="comment-me__button">
                    <div className="comment-me__button-cancel">
                        Hủy
                    </div>
                    <div
                        onClick={handleReply}
                        className={`comment-me__button-push ${cmtReply && "comment-me__button-push--hightlight"}`}
                    >
                        Trả lời
                    </div>
                </div>
            </div>}
        </Fragment >
    );
}

export default InputCommentReply;