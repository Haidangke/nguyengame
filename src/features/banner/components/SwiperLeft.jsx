import { getImage } from "apis/apiConfig";
import PropTypes from 'prop-types';
import React from "react";
import { useHistory } from "react-router";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/components/pagination/pagination.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import maxGraphics from "utils/maxGraphics";

SwiperLeft.propTypes = {
    onMobile: PropTypes.bool.isRequired,
    setIdxActive: PropTypes.func,
    setSwiper: PropTypes.func,
    data: PropTypes.array
}

function SwiperLeft({ data, setSwiper, setIdxActive, onMobile }) {
    SwiperCore.use(onMobile ? [Pagination] : [Autoplay, EffectFade]);
    const history = useHistory();
    
    return (
        <div className="banner-left">
            <Swiper
                allowTouchMove={onMobile}
                onSwiper={(s) => setSwiper(s)}
                onSlideChange={(e) => setIdxActive(e.realIndex)}
                pagination={onMobile}
                loop={true}
                effect={!onMobile && "fade"}
                fadeEffect={{ crossFade: true }}

                speed={500}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={18}
            >
                {data?.map(game => (
                    <SwiperSlide
                        onClick={() => history.push(`/detail/${game.id}`)}
                        key={game.id}
                    >
                        <div className="banner-slide__item">
                            <img src={getImage(maxGraphics(game?.artworks))} alt="game" />

                            <div className="banner-slide__item-info">
                                <div className="banner-slide__item-name">
                                    {game?.name}
                                </div>
                                <div className="banner-slide__item-description">
                                    {game?.storyline || game?.summary}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default SwiperLeft;