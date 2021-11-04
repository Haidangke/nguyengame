import { auth } from "Firebase/config";
import useOnClickOutside from "hooks/useOnClickOutside";
import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Auth.scss";

function Auth() {
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [isPoppver, setIsPopover] = useState(false);
    const poppverRef = useRef();
    useEffect(() => {
        const unlisten = auth.onAuthStateChanged((user) => {
            if (user) {
                const { email, displayName, photoURL } = user;
                setUser({ email, displayName, photoURL })
            } else {
                setUser(null);
                localStorage.removeItem("user")
            }
        });
        return () => unlisten();
    }, []);

    useOnClickOutside(poppverRef, () => setIsPopover(false));

    const handleLogout = () => {
        auth.signOut();
        history.push("/login");
        localStorage.removeItem('user');
    }
    return (
        user ?
            <div className="auth-avatar" >
                <img
                    src={user.photoURL}
                    alt={user.displayName}
                    onClick={() => setIsPopover(!isPoppver)}
                    className="auth-avatar__image"
                />
                {isPoppver && <div ref={poppverRef} className="auth-popover">
                    <div className="auth-popover__info">
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className="auth-popover__info-image"
                        />
                        <div className="auth-popover__info-name">
                            {user.displayName}
                        </div>
                    </div>
                    <div className="auth-popover__list">
                        <div className="auth-popover__list-item">Danh sách game</div>
                    </div>
                    <div className="auth-popover__list">
                        <div className="auth-popover__list-item">Cài đặt</div>
                        <div
                            onClick={handleLogout}
                            className="auth-popover__list-item"
                        >Đăng xuât</div>
                    </div>
                </div>}
            </div > : <Link to="/login" className="auth-login">Đăng nhập</Link>
    );
}

export default Auth;