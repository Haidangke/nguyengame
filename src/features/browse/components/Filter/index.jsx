import { resetFilter } from 'features/browse/browseSlice';
import React, { Fragment, useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import GameModeFilter from './GameModeFilter';
import GenresFilter from './GenresFilter';
import PlatformsFilter from './PlatformsFilter';
import TitleFilter from './TitleFilter';

function BrowserFilter() {
    const dispatch = useDispatch();
    const [isFilterMobile, setIsFilterMobile] = useState(false);
    const handleResetFilter = () => dispatch(resetFilter());

    const handleDontFilterMobile = () => {
        setIsFilterMobile(false);
        window.scrollTo(0, 0);
    };

    return (
        <Fragment>
            <div
                className="browse-filter__mobile"
                onClick={() => setIsFilterMobile(true)}
            >
                Filter
                <BsFilterLeft />
            </div>
            <div className={`browse-filter ${isFilterMobile && 'browse-filter--mobile'}`}>
                <div className="browse-filter__list">
                    <TitleFilter handleResetFilter={handleResetFilter} />
                    <GenresFilter />
                    <GameModeFilter />
                    <PlatformsFilter />
                </div>
                <div className="browse-filter__button">
                    <span onClick={() => setIsFilterMobile(false)}>Cancel</span>
                    <span onClick={handleDontFilterMobile}>Done</span>
                </div>
            </div>
        </Fragment>
    );
}

export default BrowserFilter;