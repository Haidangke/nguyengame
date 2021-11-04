import { getImage } from "apis/apiConfig";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

SwiperRight.propTypes = {
    idxActive: PropTypes.number,
    data: PropTypes.array,
    swiper: PropTypes.any
}

function SwiperRight({ data, swiper, idxActive }) {
    const history = useHistory();
    return (
        <div className="banner-right">
            <ul className="banner-menu">
                {data.map((game, index) => (
                    <li
                        onClick={() => idxActive === index ?
                            history.push(`/detail/${game.id}`) :
                            swiper.slideTo(index + 1)}
                        key={index}
                        className={`banner-menu__item 
                        ${idxActive === index && "banner-menu__item--active"}`}
                    >
                        <div className="banner-menu__item-image">
                            <img
                                src={getImage(game?.cover?.image_id)}
                                alt="game"
                            />
                        </div>
                        <div className="banner-menu__item-name">{game?.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SwiperRight;