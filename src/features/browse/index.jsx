import React from 'react';
import "./Browse.scss";
import BrowseListGame from './components/BrowseGame';
import BrowseSort from './components/BrowseSort';
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

        </div>
    )
}

export default Browse;

