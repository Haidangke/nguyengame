import React, { useState } from 'react';
import { IoNotificationsCircle } from "react-icons/io5";
import './Notify.scss';

function Notify() {
    const [isNotifyPopup, setIsNotifyPopup] = useState(false);
    const user = Boolean(JSON.parse(localStorage.getItem("user")));
    return (
        <div className="notify">
            <div className="notify-icon" onClick={() => setIsNotifyPopup(!isNotifyPopup)}>
                <IoNotificationsCircle />
            </div>

            {isNotifyPopup && <div className="notify-container">
                <div className="notify-title">
                    Thông báo
                </div>
                <div className="notify-list">
                    <div className="notify-item">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GhmE_6NEM5QnbbVq9UvGBmMUaT95RCFewozCMRyug=s96-c" alt="" className="notify-item__avatar" />
                        <div className="notify-item__main">
                            <div className="notify-item__content">
                                Phương T đã nhắc tới bạn trong một bình luận.
                            </div>
                            <div className="notify-item__date">
                                2 ngày trước
                            </div>
                        </div>
                    </div>

                    <div className="notify-item">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GhmE_6NEM5QnbbVq9UvGBmMUaT95RCFewozCMRyug=s96-c" alt="" className="notify-item__avatar" />
                        <div className="notify-item__main">
                            <div className="notify-item__content">
                                Phương T đã nhắc tới bạn trong một bình luận.
                            </div>
                            <div className="notify-item__date">
                                2 ngày trước
                            </div>
                        </div>
                    </div>

                    <div className="notify-item">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GhmE_6NEM5QnbbVq9UvGBmMUaT95RCFewozCMRyug=s96-c" alt="" className="notify-item__avatar" />
                        <div className="notify-item__main">
                            <div className="notify-item__content">
                                Phương T đã nhắc tới bạn trong một bình luận.
                            </div>
                            <div className="notify-item__date">
                                2 ngày trước
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Notify;