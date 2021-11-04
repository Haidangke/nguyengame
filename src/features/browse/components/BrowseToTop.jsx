import useScroll from 'hooks/useScroll';
import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

function BrowseToTop() {
    const { y } = useScroll();
    if (y < 1500) return <div></div>;
    return (
        <span onClick={() => window.scrollTo(0, 0)}>
            <AiOutlineArrowUp />
        </span>
    );
}

export default BrowseToTop;