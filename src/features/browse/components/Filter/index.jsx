import { resetFilter } from 'features/browse/browseSlice';
import React, { Fragment, useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import GameModeFilter from './GameMode';
import GenresFilter from './Genres';
import PlatformsFilter from './Platforms';
import TitleFilter from './Title';

export default function BrowserFilter() {
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
                Lọc <BsFilterLeft />
            </div>
            <div className={`browse-filter ${isFilterMobile && 'browse-filter--mobile'}`}>
                <div className="browse-filter__list">
                    <TitleFilter handleResetFilter={handleResetFilter} />
                    <GenresFilter />
                    <GameModeFilter />
                    <PlatformsFilter />
                </div>
                <div className="browse-filter__button">
                    <span onClick={() => setIsFilterMobile(false)}>Hủy</span>
                    <span onClick={handleDontFilterMobile}>Xong</span>
                </div>
            </div>
        </Fragment>
    );
}
