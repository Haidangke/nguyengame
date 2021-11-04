import Title from "features/discover/components/Title";
import useDeclareArray from "hooks/useDeclareArray";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ListArtwork.scss";

function ListArtworkLoading({ title, onMobile }) {
    const listItemLoading = useDeclareArray(3);
    return (
        <div className="game-artworks">
            {title && <Title title={title} />}
            <div className="game-artworks-list">
                <Swiper
                    allowTouchMove={false}
                    spaceBetween={20}
                    slidesPerView={onMobile ? 1.1 : 2}
                >
                    {listItemLoading.map(item => (
                        <SwiperSlide key={item}>
                            <div className="game-artworks-item">
                                <div 
                                    className="game-artworks-item__image game-artworks-item__image--loading"
                                >
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ListArtworkLoading;