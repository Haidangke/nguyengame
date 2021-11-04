import useOnClickOutside from "hooks/useOnClickOutside";
import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ListSearch from "./components/ListSearch";
import "./Search.scss";
import { fetchDataSuccess, setInput } from "./searchSlice";

function Search() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isInputMobile, setIsInputMobile] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const { input } = useSelector(state => state.search);

    const searchRef = useRef();

    const handleResetSearch = () => {
        dispatch(fetchDataSuccess([]));
        dispatch(setInput(""));
        setIsInputMobile(false);
    }

    const handleRedirect = (id) => {
        handleResetSearch();
        setIsShow(false);
        setIsInputMobile(false);
        history.push(`/detail/${id}`);
    }

    const handleSearchGame = (e) => {
        const input = e.target.value;
        dispatch(setInput(input));
    }

    useOnClickOutside(searchRef, () => {
        setIsShow(false);
        setIsInputMobile(false);
    });

    return (
        <div ref={searchRef} className="topbar-search">
            {/* tren mobile */}
            {isInputMobile && <div className="topbar-search__mobile">
                <div className="topbar-search__icon">
                    <BsSearch />
                </div>
                <input
                    autoFocus
                    value={input}
                    onChange={handleSearchGame}
                    onFocus={() => setIsShow(true)}
                    placeholder="Search"
                />
                <div className="topbar-search__icon topbar-search__icon--right">
                    <IoMdClose onClick={handleResetSearch} />
                </div>
            </div>}

            {/* tren pc */}

            <div className="topbar-search__icon">
                <BsSearch onClick={() => setIsInputMobile(true)} />
            </div>

            <input
                value={input}
                onChange={handleSearchGame}
                onFocus={() => setIsShow(true)}
                placeholder="Search"
            />

            <div className="topbar-search__icon topbar-search__icon--right">
                {input && <IoMdClose onClick={handleResetSearch} />}
            </div>

            {/* đây là nơi hiển thị danh sách game đã được tìm kiếm */}
            <ListSearch
                isShow={isShow}
                inputState={input}
                handleRedirect={handleRedirect}
            />
        </div>
    )
}

export default Search;