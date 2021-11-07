
import { linksHeader } from "config/links";
import Auth from "features/auth";
import useUser from "hooks/useUser";
import React from "react";
import { SiNintendogamecube } from "react-icons/si";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Header.scss";
import ThemeToggler from "./ThemeToggle";

export default function Header() {
    const history = useHistory();
    const { pathname } = useLocation();
    const { isLoggedIn } = useUser();
    const indexActive = linksHeader.findIndex(item =>
        (item.path === pathname || (item.match && item.match.includes(pathname))));


    return (
        <header className="header">
            <div className="header-logo" >
                <Link to='/'>
                    <SiNintendogamecube />
                </Link>
            </div>
            <div className="header-menu">
                {linksHeader.map((link, index) => (
                    <div
                        key={link.name}
                        onClick={() => history.push(link.path)}
                        className={`header-item ${indexActive === index && "header-item--active"}`}
                    >
                        <div className="header-item__link">{link.name}</div>
                    </div>
                ))}
            </div>
            {!isLoggedIn && <div className="header-theme">
                <ThemeToggler />
            </div>}
            <div className="header-auth">
                <Auth />
            </div>
        </header>
    );
}
