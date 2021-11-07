import { setTheme } from "features/auth/authSlice";
import React, { useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

function ThemeToggler() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.auth.theme);
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    const handleChangeTheme = () => {
        dispatch(setTheme(nextTheme));
    }

    useEffect(() => {
        document.body.dataset.theme = theme
    }, [theme]);

    return <CgDarkMode className={`header-theme__${theme}`} onClick={handleChangeTheme} />;
}

export default ThemeToggler;