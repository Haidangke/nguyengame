import { db } from 'Firebase/config';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CommentContainer from './CommentContainer';
import InputCommentReply from './InputCommentReply';

function ListCommentReply({ comment, id, commentFirst }) {
    const roomId = comment.roomId;
    const [isCmtsReply, setIsCmtReply] = useState(false);
    const [listCommentReply, setListCommentReply] = useState([]);

    const handleFetchReply = () => {
        if (isCmtsReply) {
            setIsCmtReply(false);
            return;
        }
        setIsCmtReply(true);
    }

    useEffect(() => {
        setIsCmtReply(false);
        setListCommentReply([]);

        const unsubcribe = db.collection("comments")
            .orderBy('createdAt', 'asc')
            .where("gameId", "==", id)
            .where("isFirst", "==", false)
            .where("roomId", "==", roomId)
            .onSnapshot((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                })
                setListCommentReply(data);
            });

        return () => unsubcribe();
    }, [roomId, id])
    return (
        <div className="comment-item__reply">
            <div onClick={() => handleFetchReply(roomId)} className="comment-item__reply-more">
                {comment.quantity > 0 && (!isCmtsReply ? <>Xem thêm {comment.quantity} câu trả lời <IoIosArrowDown /></> :
                    <>Ẩn câu trả lời <IoIosArrowUp /></>)}
            </div>
            {isCmtsReply && listCommentReply?.map((commentReply, index) =>
                <div key={index} className="comment-item">
                    <div className="comment-item__container">
                        <img
                            src={commentReply.photoURL}
                            className="comment-item__avatar"
                            alt="avatar"
                        />
                        <CommentContainer comment={commentReply} />
                    </div>
                    <InputCommentReply comment={commentReply} id={id} commentFirst={commentFirst} />
                </div>)
            }
        </div>
    );
}

export default ListCommentReply;