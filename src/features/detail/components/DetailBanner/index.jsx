import { getBgVideo, getImage, getVideo } from "apis/apiConfig";
import useResize from "hooks/useResize";
import React, { useEffect, useState } from "react";
import { BiPlay } from 'react-icons/bi';
import ReactPlayer from 'react-player/youtube';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "./DetailBanner.scss";
import DetailBannerLoading from "./DetailBannerLoading";


function DetailBanner({ screenshots, videos, loading, id }) {
    SwiperCore.use([Thumbs, Navigation]);
    const { onMobile } = useResize();
    const SLIDE = onMobile ? 3 : 4;
    const [idxActive, setIdxActive] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        setIdxActive(0);
        setThumbsSwiper(null);
    }, [id]);


    return (
        loading ? <DetailBannerLoading /> :
            <div className="detail-banner">
                <div className="detail-banner__top">
                    <Swiper
                        navigation={!onMobile}
                        watchSlidesProgress={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        onSlideChange={(e) => setIdxActive(e.realIndex)}
                    >
                        {videos && videos.map((video, index) => (
                            <SwiperSlide key={video?.id}>
                                {index !== idxActive ?
                                    <img src={getBgVideo(video?.video_id)} alt="Background video" /> :
                                    <ReactPlayer
                                        id="video"
                                        width={"100%"}
                                        url={getVideo(video?.video_id)}
                                        controls
                                        loop={true}
                                    />}
                            </SwiperSlide>
                        ))}

                        {screenshots && screenshots.map(screenshot => (
                            <SwiperSlide key={screenshot.id}>
                                <img src={getImage(screenshot?.image_id)} alt="screenshot" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="detail-banner__bottom">
                    <Swiper
                        spaceBetween={14}
                        slidesPerView={SLIDE}
                        onSwiper={(s) => setThumbsSwiper(s)}


                    >

                        {videos && videos.map(video => (
                            <SwiperSlide key={video.id} >
                                <div className="detail-banner__bottom-item " >
                                    <span className="detail-banner__bottom-video-icon"><BiPlay /></span>
                                    <img src={getBgVideo(video?.video_id)} alt="Background video" />
                                </div>

                            </SwiperSlide>
                        ))}
                        {screenshots && screenshots.map(screenshot => (
                            <SwiperSlide key={screenshot.id} >
                                <div className="detail-banner__bottom-item" >
                                    <img src={getImage(screenshot?.image_id)} alt="screenshot" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
    )
}

export default DetailBanner;