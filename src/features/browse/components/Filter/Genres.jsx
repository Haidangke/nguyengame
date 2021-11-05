import { genres } from "config/browse";
import { setFilter } from "features/browse/browseSlice";
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
function GenresFilter() {
    const dispatch = useDispatch();
    const [isGenres, setIsGenres] = useState(false);

    const reference = useSelector(state => state.browse);
    const genresCheck = reference.genresCheck;

    const handleGenresCheck = (id) => {
        const newGenresCheck = genresCheck.includes(id) ?
            genresCheck.filter(x => x !== id) :
            [...genresCheck, id];

        dispatch(setFilter({
            ...reference,
            genresCheck: newGenresCheck,
        }));
    };

    return (
        <div className="browse-filter__item">
            <div
                onClick={() => setIsGenres(!isGenres)}
                className="browse-filter__item-heading"
            >
                THỂ LOẠI {isGenres ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            {isGenres && genres.map(genre =>
                <div key={genre.id} className="browse-filter__item-container">
                    <label
                        className={genresCheck.includes(genre.id) ?
                            "browse-filter__item-container-label" :
                            undefined
                        }
                        htmlFor={genre.name}
                    >
                        {genre.name}
                    </label>
                    <input
                        checked={genresCheck.includes(genre.id)}
                        onChange={() => handleGenresCheck(genre.id)}
                        type="checkbox"
                        value={genre.id}
                        name={genre.name}
                        id={genre.name}
                    />
                </div>
            )}
        </div>
    );
}

export default GenresFilter;