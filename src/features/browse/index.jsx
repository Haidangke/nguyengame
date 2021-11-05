import React from 'react';
import "./Browse.scss";
import BrowseListGame from './components/ListGame';
import BrowseSort from './components/Sort';
import BrowseToTop from './components/ButtonToTop';
import BrowserFilter from './components/Filter';

function Browse() {
    return (
        <div className="browse">
            <div className="browse-left">
                <BrowseSort />
                <BrowseListGame />
            </div>
            <div className="browse-right">
                <BrowserFilter />
            </div>
            <div className="browse-to-top">
                <BrowseToTop />
            </div>
        </div>
    )
}

export default Browse;

