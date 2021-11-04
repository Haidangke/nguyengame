import useDeclareArray from "hooks/useDeclareArray";
import PropTypes from 'prop-types';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

BannerLoading.propTypes = {
    onMobile: PropTypes.bool.isRequired
}

function BannerLoading() {
    const listItemLoading = useDeclareArray(6);
    return (
        <div className="banner">
            <div className="banner-left">
                <Swiper
                    allowTouchMove={false}
                    slidesPerView={1}
                    spaceBetween={18}
                >
                    {listItemLoading.map(item => (
                        <SwiperSlide key={item}>
                            <div className="banner-slide__item  banner-left--loading">
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="banner-right">
                <ul className="banner-menu">
                    {listItemLoading.map(fakeItem => (
                        <li
                            key={fakeItem}
                            className="banner-menu__item banner-menu__item--loading"
                        >
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BannerLoading;