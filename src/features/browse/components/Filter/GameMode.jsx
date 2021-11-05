import { gameMode } from 'config/browse';
import { setFilter } from 'features/browse/browseSlice';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

function GameModeFilter() {
    const dispatch = useDispatch();
    const reference = useSelector(state => state.browse);
    const gameModeCheck = reference.gameModeCheck;
    const [isGameMode, setIsGameMode] = useState(false);

    const handleGameModeCheck = (id) => {
        const newGameModeCheck = gameModeCheck.includes(id) ?
            gameModeCheck.filter(x => x !== id) :
            [...gameModeCheck, id];

        dispatch(setFilter({
            ...reference,
            gameModeCheck: newGameModeCheck,
        }));
    };

    return (
        <div className="browse-filter__item">
            <div
                onClick={() => setIsGameMode(!isGameMode)}
                className="browse-filter__item-heading"
            >
                CHẾ ĐỘ CHƠI {isGameMode ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            {isGameMode && gameMode.map(mode =>
                <div key={mode.id} className="browse-filter__item-container">
                    <label
                        htmlFor={mode.name}
                        className={gameModeCheck.includes(mode.id) ? "browse-filter__item-container-label" : undefined}
                    >
                        {mode.name}
                    </label>
                    <input
                        checked={gameModeCheck.includes(mode.id)}
                        onChange={() => handleGameModeCheck(mode.id)}
                        type="checkbox"
                        value={mode.id}
                        name={mode.name}
                        id={mode.name}
                    />
                </div>
            )}
        </div>
    );
}

export default GameModeFilter;