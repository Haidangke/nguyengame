import { getImageSmall } from 'apis/apiConfig';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

ListSearch.propTypes = {
    isShow: PropTypes.bool,
    listGame: PropTypes.array,
    searchRef: PropTypes.any,
    inputState: PropTypes.string,
    handleRedirect: PropTypes.func
};

const convertStringInline = (s, sIn) => {
    const newS = s.toLowerCase();
    const newSIn = sIn.toLowerCase();
    const result = newS.replace(newSIn, `<span>${newSIn}</span>`);
    return result;
}

function ListSearch({ isShow, inputState, handleRedirect }) {
    const { input, listGame, loading, isFetched } = useSelector(state => state.search);

    if (!isShow) return <div></div>;

    if ((!isFetched && !loading) || !input)
        return <div className="search-item--loading">Nhập tên game để tìm kiếm</div>;

    if (loading)
        return <div className="search-item--loading">Đang tìm kiếm...</div>;

    if (!loading && isFetched && listGame.length === 0)
        return <div className="search-item--loading">Không có game nào !</div>;

    return (
        <div className="search" >
            <div className="search-list">
                {listGame.map(game => (
                    <div
                        key={game?.id}
                        onClick={() => handleRedirect(game?.id)}
                        className="search-item"
                    >
                        <div className="search-item__image">
                            <img src={getImageSmall(game?.cover?.image_id)} alt="cover" />
                        </div>
                        <div className="search-item__name"
                            dangerouslySetInnerHTML={{ __html: convertStringInline(game?.name, inputState) }}
                        >
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListSearch;