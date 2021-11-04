import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import './Notify.scss';

function Notify() {
    const user = Boolean(JSON.parse(localStorage.getItem("user")));
    return (
        <div className="notify">
            <div className="notify-icon">
                <IoIosNotifications />
            </div>
        </div>
    );
}

export default Notify;