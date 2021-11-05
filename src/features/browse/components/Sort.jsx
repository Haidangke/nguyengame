import { listBrowseSort } from 'config/browse';
import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../browseSlice';

function BrowseSort() {
    const dispatch = useDispatch();
    const [nameSort, setNameSort] = useState('Mới ra mắt');
    const [isSorts, setIsSort] = useState(false);
    const reference = useSelector(state => state.browse);

    const browseRef = useRef();

    const handleSortrBowse = (valueSort, nameSort) => {
        dispatch(setFilter({
            ...reference,
            sort: valueSort
        }));
        setNameSort(nameSort);
        setIsSort(false);
    }

    useOnClickOutside(browseRef, () => setIsSort(false));

    return (
        <div className="browse-sort" ref={browseRef}>
            <div className="browse-sort__title" >
                <span>Sort By: </span>
                <span onClick={() => setIsSort(!isSorts)}>{nameSort}</span>
                <IoIosArrowDown />
            </div>

            {isSorts && <div className="browse-sort__list">
                {listBrowseSort.map(browseSort =>
                    <div
                        key={browseSort.value}
                        onClick={() => handleSortrBowse(browseSort.value, browseSort.name)}
                        className="browse-sort__item"
                    >
                        {browseSort.name}
                    </div>)}
            </div>}
        </div>
    );
}

export default BrowseSort;