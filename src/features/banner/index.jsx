import { gameApi } from "apis/gameApi";
import useResize from "hooks/useResize";
import React, { useState } from "react";
import { useQuery } from "react-query";
import "./Banner.scss";
import BannerLoading from "./BannerLoading";
import SwiperLeft from "./components/SwiperLeft";
import SwiperRight from "./components/SwiperRight";

function Banner() {
    const { onMobile } = useResize();
    const [idxActive, setIdxActive] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const { data, isLoading } = useQuery('banner', async () => {
        const listIdGame = [145357, 125166, 167611, 119277, 124700, 134591];
        return await gameApi.getAll({
            limit: 6,
            id: listIdGame
        });
    });

    return (
        isLoading ? <BannerLoading onMobile={onMobile} /> :
        <div className="banner">
            <SwiperLeft
                onMobile={onMobile}
                data={data}
                setSwiper={setSwiper}
                setIdxActive={setIdxActive}
            />
            <SwiperRight
                data={data}
                swiper={swiper}
                idxActive={idxActive}
            />
        </div>
    );
}

export default Banner;
