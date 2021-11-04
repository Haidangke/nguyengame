import React, { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

function ThemeToggler() {
    const [theme, setTheme] = useState('dark');
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    useEffect(() => {
        document.body.dataset.theme = theme
    }, [theme]);

    return <CgDarkMode className={`header-theme__${theme}`} onClick={() => setTheme(nextTheme)} />;
}

export default ThemeToggler;
