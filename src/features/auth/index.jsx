import { auth } from "Firebase/config";
import useOnClickOutside from "hooks/useOnClickOutside";
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Auth.scss";
import { resetUserInfo, setUserInfo } from "./authSlice";
import AuthPopover from "./components/Popover";

function Auth() {
    const dispatch = useDispatch();
    const { isLoggedIn, photoURL, displayName } = useSelector(state => state.auth.user);
    const [isPoppver, setIsPopover] = useState(false);
    const authRef = useRef();

    useEffect(() => {
        const unlisten = auth.onAuthStateChanged((user) => {
            if (user) {
                const { email, displayName, photoURL } = user;
                const userId = user.uid;
                dispatch(setUserInfo({ email, displayName, photoURL, userId, isLoggedIn: true }));
            } else {
                dispatch(resetUserInfo());
            }
        });
        return () => unlisten();
    }, [dispatch]);

    useOnClickOutside(authRef, () => setIsPopover(false));

    return (
        isLoggedIn ? <div className="auth" ref={authRef}>
            <div className="auth-avatar" >
                {isLoggedIn && <img
                    src={photoURL}
                    alt={displayName}
                    className="auth-avatar__image"
                    onClick={() => setIsPopover(!isPoppver)}
                />}
            </div >
            {isPoppver && <AuthPopover />}
        </div> : <Link to="/login" className="auth-login">Đăng nhập</Link>
    );
}

export default Auth;