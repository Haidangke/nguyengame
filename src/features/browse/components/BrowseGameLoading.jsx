import useDeclareArray from 'hooks/useDeclareArray';
import React from 'react';
import { useSelector } from 'react-redux';

function BrowseGameLoading() {
    const { limit } = useSelector(state => state.browse);
    const listLoading = useDeclareArray(24);
    return (
        <div className="browse-games">
            {listLoading.map(itemLoading =>
                <div
                    key={itemLoading}
                    className="browse-game browse-game--loading"
                >
                    <div className="browse-game__image"></div>
                    <div className="game-info">
                        <div className="game-info__name game-info__name--loading"> </div>
                        <div className="game-info__platforms game-info__platforms--loading"> </div>
                        <div className="game-info__developer game-info__developer--loading"> </div>
                        <div className="game-info__genres game-info__genres--loading">
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BrowseGameLoading;