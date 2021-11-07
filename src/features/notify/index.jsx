import { db } from 'Firebase/config';
import useOnClickOutside from 'hooks/useOnClickOutside';
import useUser from 'hooks/useUser';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdNotifications } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import formatDate from 'utils/formatTime';
import './Notify.scss';
import { setCommentId } from './notifySlice';

function Notify() {
    const history = useHistory();
    const dispatch = useDispatch();
    const notifyRef = useRef();
    const [isNotifyPopup, setIsNotifyPopup] = useState(false);
    const [listNotify, setListNotify] = useState([]);

    const { userId, isLoggedIn } = useUser();

    const handleRedirect = (notify) => {
        setIsNotifyPopup(false);
        history.push(notify.address);
        dispatch(setCommentId(notify.commentId))
        setTimeout(() => {
            window.scrollTo({
                top: 3000,
                behavior: "smooth"
            });
        }, 1000);

    }

    useEffect(() => {
        if (isLoggedIn) {
            const unsubcribe = db.collection("notifys")
                .orderBy('createdAt', 'desc')
                .where("receiver", "==", userId)
                .limit(10)
                .onSnapshot((querySnapshot) => {
                    const data = [];
                    querySnapshot.forEach((doc) => {
                        if (doc.exists) {
                            data.push({ id: doc.id, ...doc.data() });
                        }

                    })
                    setListNotify(data);
                });
            return unsubcribe;
        }
    }, [userId, isLoggedIn]);

    useOnClickOutside(notifyRef, () => setIsNotifyPopup(false));

    return (
        isLoggedIn && <div ref={notifyRef} className="notify">
            <div className="notify-icon" onClick={() => setIsNotifyPopup(!isNotifyPopup)}>
                <IoMdNotifications />
            </div>

            {isNotifyPopup && <div className="notify-container">
                <div className="notify-title">
                    Thông báo
                </div>
                <div className="notify-list">
                    {listNotify.map(notify =>
                        <div onClick={() => handleRedirect(notify)} key={notify.id} className="notify-item">
                            <img src={notify?.senderPhoto} alt="" className="notify-item__avatar" />
                            <div className="notify-item__main">
                                <div className="notify-item__content" dangerouslySetInnerHTML={{ __html: notify?.content }}>

                                </div>
                                <div className="notify-item__date">
                                    {formatDate(notify?.createdAt?.seconds)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>}
        </div>
    );
}

export default Notify;