import useDeclareArray from "hooks/useDeclareArray";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";
import "swiper/swiper.scss";

function DetailBannerLoading() {
    const listItemLoading = useDeclareArray(3);

    return (
        <div className="detail-banner">
            <div className="detail-banner__top">
                <Swiper >
                    <SwiperSlide >
                        <div className="detail-banner__top--loading"></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="detail-banner__bottom">
                <div className="detail-banner__bottom-container">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={14}
                    >
                        {listItemLoading.map(item => (
                            <SwiperSlide key={item}>
                                <div className="detail-banner__bottom--loading"></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default DetailBannerLoading;