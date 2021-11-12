import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

function TitleFilter({ handleResetFilter }) {
    const { genresCheck, gameModeCheck, platformsCheck } = useSelector(state => state.browse);

    const totalFilter = useMemo(() => platformsCheck.length + genresCheck.length + gameModeCheck.length,
        [gameModeCheck.length, genresCheck.length, platformsCheck.length]);

    return (
        <div className="browse-filter__title">
            <span>Bộ lọc [{totalFilter}]</span>
            <span onClick={handleResetFilter}>ĐẶT LẠI</span>
        </div>
    );
}

export default TitleFilter;