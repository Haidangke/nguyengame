import Switch from '@mui/material/Switch';
import { auth } from 'Firebase/config';
import useUser from 'hooks/useUser';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setTheme } from '../authSlice';
import "./Popover.scss";

function AuthPopover() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { photoURL, displayName, removeUser } = useUser();
    const theme = useSelector(state => state.auth.theme);

    const nextTheme = theme === 'light' ? 'dark' : 'light';

    const handleLogout = () => {
        auth.signOut();
        history.push("/login");
        removeUser();
    }

    const handleChangeTheme = (e) => {
        dispatch(setTheme(nextTheme));
    }

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme])

    return (
        <div className="auth-popover">
            <div className="auth-popover__info">
                <img
                    src={photoURL}
                    alt={displayName}
                    className="auth-popover__info-image"
                />
                <div className="auth-popover__info-name">
                    {displayName}
                </div>
            </div>
            <div className="auth-popover__list">
                <div className="auth-popover__list-item">Danh sách game</div>
            </div>
            <div className="auth-popover__list">
                <div className="auth-popover__list-item auth-popover__list-item--theme">
                    Giao diện tối
                    <Switch onChange={handleChangeTheme} checked={theme === 'dark'} />
                </div>
                <div
                    onClick={handleLogout}
                    className="auth-popover__list-item"
                >Đăng xuât</div>
            </div>
        </div>
    );
}

export default AuthPopover;