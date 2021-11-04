import Title from "features/discover/components/Title";
import useResize from "hooks/useResize";
import Proptypes from "prop-types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemGame from "./ItemGame";
import "./ListGame.scss";
import ListGameLoading from "./ListGameLoading";

ListGame.propTypes = {
    listGame:
        Proptypes.shape({
            data: Proptypes.array,
            isLoading: Proptypes.bool,
            isFetched: Proptypes.bool
        })
    ,
    title: Proptypes.string.isRequired,
    main: Proptypes.bool
}


function ListGame({ listGame, title, main }) {
    const { onMobile } = useResize();
    const [swiper, setSwiper] = useState(null);
    const [idxActive, setIdxActive] = useState(0);
    const { data, isLoading, isFetched } = listGame;

    if (isLoading) return <ListGameLoading title={title} main={main} />;
    if (isFetched && (data.length === 0 || !data)) return <div></div>;

    return (
        <div className="game">
            <Title
                title={title}
                swiper={swiper}
                idxActive={idxActive}
                length={data?.length}
            />
            <div className="game-list">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={onMobile ? (main ? 1.5 : 2) : 5}
                    onSwiper={(s) => setSwiper(s)}
                    onSlideChange={(e) => setIdxActive(e.realIndex)}
                >
                    {data?.map(game => (
                        <SwiperSlide key={game?.id}>
                            <ItemGame game={game} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ListGame;