import { platforms } from 'config/browse';
import { setFilter } from 'features/browse/browseSlice';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

function PlatformsFilter() {
    const dispatch = useDispatch();
    const [isPlatforms, setIsPlatforms] = useState(false);
    const reference = useSelector(state => state.browse);
    const platformsCheck = reference.platformsCheck;

    const handlePlatformsCheck = (id) => {
        const newPlatformsCheck = platformsCheck.includes(id) ?
            platformsCheck.filter(x => x !== id) :
            [...platformsCheck, id];

        dispatch(setFilter({
            ...reference,
            platformsCheck: newPlatformsCheck,
        }));
    };

    return (
        <div className="browse-filter__item">
            <div
                onClick={() => setIsPlatforms(!isPlatforms)}
                className="browse-filter__item-heading"
            >
                NỀN TẢNG {isPlatforms ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            {isPlatforms && platforms.map(platform =>
                <div key={platform.id} className="browse-filter__item-container">
                    <label
                        htmlFor={platform.abbreviation}
                        className={platformsCheck.includes(platform.id) ?
                            "browse-filter__item-container-label" :
                            undefined
                        }
                    >
                        {platform.abbreviation}
                    </label>
                    <input
                        checked={platformsCheck.includes(platform.id)}
                        onChange={() => handlePlatformsCheck(platform.id)}
                        type="checkbox"
                        value={platform.id}
                        name={platform.abbreviation}
                        id={platform.abbreviation}
                    />
                </div>
            )}
        </div>
    );
}

export default PlatformsFilter;