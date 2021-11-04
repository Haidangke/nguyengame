import Title from "features/discover/components/Title";
import useDeclareArray from "hooks/useDeclareArray";
import useResize from "hooks/useResize";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ListGame.scss";

function ListGameLoading({ title, control, main }) {
    const listItemLoading = useDeclareArray(6);
    const { onMobile } = useResize();
    return (
        <div className="game">
            <Title title={title} control={control} />
            <div className="game-list">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={onMobile ? (main ? 1.5 : 2) : 5}
                >
                    {listItemLoading.map(item => (
                        <SwiperSlide key={item} >
                            <div
                                className="game-item__image game-item__image--loading"
                            >
                                <div className="game-item__image-img"></div>
                            </div>
                            <div className="game-info">
                                <div className="game-info__name game-info__name--loading"> </div>
                                <div className="game-info__platforms game-info__platforms--loading"> </div>
                                <div className="game-info__developer game-info__developer--loading"> </div>
                                <div className="game-info__genres game-info__genres--loading"> </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ListGameLoading;