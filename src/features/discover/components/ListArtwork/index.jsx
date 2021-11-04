import Title from "features/discover/components/Title";
import useResize from "hooks/useResize";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemArtwork from "./ItemArtwork";
import "./ListArtwork.scss";
import ListArtworkLoading from "./ListArtworkLoading";

function ListArtwork({ listGame, title }) {
    const { onMobile } = useResize();
    const { data, isLoading, isFetched } = listGame;

    if (isLoading) return <ListArtworkLoading onMobile={onMobile} title={title} />;
    if (isFetched && !data) return <div></div>;

    return (
        <div className="game-artworks">
            {title && <Title title={title} />}
            <div className="game-artworks-list">
                <Swiper
                    allowTouchMove={onMobile}
                    spaceBetween={20}
                    slidesPerView={onMobile ? 1.1 : 2}
                >
                    {data?.map(game => (
                        <SwiperSlide key={game?.id}>
                            <ItemArtwork key={game?.id} game={game} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ListArtwork;