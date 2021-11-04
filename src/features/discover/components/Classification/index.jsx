import useResize from 'hooks/useResize';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "./Classification.scss";
import ClassificationItem from './ClassificationItem';
import ClassificationLoading from './ClassificationLoading';

function Classification({ classification }) {
    const { onMobile } = useResize();
    const { listNewReleases, listTopFollows, listGameOnSwitch } = classification;
    const classificationArray = [
        {
            id: 1,
            title: "Game mới phát hành",
            value: listNewReleases.data
        }, {
            id: 2,
            title: "Game nhiều lượt theo dõi",
            value: listTopFollows.data
        }, {
            id: 3,
            title: "Game trên Nitendo Switch",
            value: listGameOnSwitch.data
        }
    ];

    if (listNewReleases.isLoading || listTopFollows.isLoading || listGameOnSwitch.isLoading)
        return <ClassificationLoading onMobile={onMobile} />

    return (

        <div className="classification">
            <Swiper
                slidesPerView={onMobile ? 1.2 : 3}
                spaceBetween={18}
                allowTouchMove={onMobile}
            >
                {classificationArray?.map(classificationItem => (
                    <SwiperSlide key={classificationItem.title} >
                        <ClassificationItem classificationItem={classificationItem} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Classification;