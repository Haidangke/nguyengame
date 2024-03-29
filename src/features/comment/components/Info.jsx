import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';

function CommentInfo({ comment }) {
    return (
        <div className="comment-item__info">
            <div className="comment-item__container-name">
                {comment?.displayName}
            </div>
            <div className="comment-item__container-content">
                {comment?.receiver && <span>{comment?.receiver}</span>}
                {comment?.content}
                {comment?.like > 0 && <div className="comment-item__container-content-like">
                    <span><AiTwotoneLike /></span>
                    <span>{comment?.like}</span>
                </div>}

            </div>
        </div>
    );
}

export default CommentInfo;