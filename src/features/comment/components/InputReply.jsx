import cmtApi from 'apis/cmtApi';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import formatDate from 'utils/formatTime';
import LikeComment from './Like';

function CommentInputReply({ gameId, comment, commentFirst }) {
    const { photoURL, displayName, userId, isLoggedIn } = useSelector(state => state.auth.user);

    const [isInputReply, setIsInputReply] = useState(false);
    const [cmtReply, setCmtReply] = useState("");

    const handleReply = async () => {
        const cmtId = commentFirst.id;
        const roomId = comment.roomId;
        const receiverName = comment.displayName;

        await cmtApi.addCmt({
            gameId,
            content: cmtReply,
            isFirst: false,
            roomId,
            receiver: receiverName !== displayName ? receiverName : ""
        }, { userId, displayName, photoURL });

        await cmtApi.increaseCmt(cmtId, "quantity");

        await cmtApi.increaseTotalCmt(gameId);


        setCmtReply("");
    };

    useEffect(() => {
        setIsInputReply(false);
        setCmtReply("");

    }, [gameId]);

    return (
        <Fragment>
            <div className="comment-item__features">
                {isLoggedIn && <Fragment>
                    <LikeComment comment={comment} gameId={gameId} />
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

export default CommentInputReply;