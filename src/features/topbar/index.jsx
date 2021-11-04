import Search from "features/search";
import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation, useParams } from "react-router-dom";
import "./Topbar.scss";
import { setPathBack } from "./topbarSlice";

Topbar.propTypes = {
    name: PropTypes.string
}

export default function Topbar({ name }) {
    const dispatch = useDispatch();
    const { pathBack } = useSelector(state => state.topbar);
    const history = useHistory();
    const { id } = useParams();
    const { pathname } = useLocation();

    const handleGoBack = () => {
        if (pathBack === '/') {
            history.goBack();
        } else {
            history.push(pathBack);
        }
    }

    useEffect(() => {
        if (pathname.includes('/browse')) {
            dispatch(setPathBack('/browse'));
        }

        if (pathname === '/') {
            dispatch(setPathBack('/'));
        }

    }, [pathname, dispatch]);


    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                {id ? <div className="topbar-tool">
                    <div
                        className="topbar-back"
                        onClick={handleGoBack}
                    >
                        <IoIosArrowBack />
                        <span>Go back</span>
                    </div>
                    <div className="topbar-name">{name}</div>
                </div> : <div className="topbar-menu">
                    <NavLink className="topbar-item" to="/" exact>
                        Khám phá
                    </NavLink>
                    <NavLink className="topbar-item" to="/browse">
                        Danh mục
                    </NavLink>
                </div>}
                <Search />
            </div>

        </div>
    );
}
