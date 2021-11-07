import { auth } from "Firebase/config";
import useOnClickOutside from "hooks/useOnClickOutside";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import "./Auth.scss";
import AuthPopover from "./components/Popover";
import { encode as base64_decode } from 'base-64';

function Auth() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(base64_decode('user'))));
    const [isPoppver, setIsPopover] = useState(false);
    const authRef = useRef();

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

    useOnClickOutside(authRef, () => setIsPopover(false));

    return (
        user ?
            <div className="auth" ref={authRef}>
                <div className="auth-avatar" >
                    <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="auth-avatar__image"
                        onClick={() => setIsPopover(!isPoppver)}
                    />
                </div >
                {
                    isPoppver && <AuthPopover />
                }</div>
            : <Link to="/login" className="auth-login">Đăng nhập</Link>
    );
}

export default Auth;