import { db } from 'Firebase/config';
import useOnClickOutside from 'hooks/useOnClickOutside';
import useUser from 'hooks/useUser';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Notify.scss';

function Notify() {
    const notifyRef = useRef();
    const [isNotifyPopup, setIsNotifyPopup] = useState(false);
    const [listNotify, setListNotify] = useState([]);

    const { userId, isLoggedIn } = useUser();

    useOnClickOutside(notifyRef, () => setIsNotifyPopup(false));


    useEffect(() => {
        if (isLoggedIn) {
            const unsubcribe = db.collection("notifys")
                .orderBy('createdAt', 'desc')
                .where("receiver", "==", userId)
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
                        <Link to={notify?.address} key={notify.id} className="notify-item">
                            <img src={notify?.senderPhoto} alt="" className="notify-item__avatar" />
                            <div className="notify-item__main">
                                <div className="notify-item__content" dangerouslySetInnerHTML={{ __html: notify?.content }}>

                                </div>
                                <div className="notify-item__date">
                                    2 ngày trước
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>}
        </div>
    );
}

export default Notify;