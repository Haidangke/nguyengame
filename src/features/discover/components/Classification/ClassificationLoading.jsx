import useDeclareArray from "hooks/useDeclareArray";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function ClassificationLoading({ onMobile }) {
    const listItemLoading = useDeclareArray(3, useDeclareArray(5));
    const listTitle = ["Game mới phát hành", "Game nhiều lượt theo dõi", "Top game trên PC"];
    return (
        <div className="classification">
            <Swiper slidesPerView={onMobile ? 1.2 : 3} spaceBetween={18} allowTouchMove={false}>
                {listItemLoading.map((items, indexs) => (
                    <SwiperSlide key={indexs}>
                        <div className="classification-wrapper">
                            <div className="classification-title">
                                {listTitle[indexs]}
                            </div>
                            <div className="classification-list">
                                {items.map(item => (
                                    <div key={item} className="classification-item">
                                        <div className="classification-item__image classification-item__image--loading">

                                        </div>
                                        <div className="classification-item__info classification-item__info--loading">
                                            <div className="classification-item__name classification-item__name--loading"></div>
                                            <div className="classification-item__platform classification-item__platform--loading"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ClassificationLoading;