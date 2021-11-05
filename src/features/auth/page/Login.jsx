import firebase, { auth, db } from "Firebase/config";
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { SiNintendogamecube } from "react-icons/si";
import { Link, useHistory } from 'react-router-dom';
import "./Login.scss";

export default function Login() {
    const history = useHistory();

    const handleLoginWithEmail = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(res => {
                const userInfo = res.user;
                const userId = res.user.uid;
                const { email, displayName, photoURL } = userInfo;
                const user = { email, displayName, photoURL, userId };

                localStorage.setItem('user', JSON.stringify(user));
                history.push("/");

                const isNewUser = res.additionalUserInfo.isNewUser;
                if (isNewUser) {
                    db.collection('users').add(user);
                };
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="login">

            <div className="login-background">
                <img
                    src="https://images.igdb.com/igdb/image/upload/t_1080p/ar6il.jpg"
                    alt="background"
                    className="login-background__image"
                />
                <div className="login-background__overplay"></div>
            </div>

            <div className="login-wrapper">
                <div className="login-logo">
                    <SiNintendogamecube />
                </div>
                <div className="login-title">
                    Đăng nhập vào Nguyenke Games
                </div>
                <div className="login-list">
                    <div className="login-item" onClick={handleLoginWithEmail}>
                        <div className="login-item__image">
                            <FcGoogle />
                        </div>
                        <div className="login-item__describe">
                            Đăng nhập bằng Google
                        </div>
                    </div>
                </div>

                <div className="login-footer">
                    <Link to="/">Quay trở về trang chủ</Link>
                </div>
            </div>

        </div>
    );
}
