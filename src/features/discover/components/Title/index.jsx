import React from "react";
import "./Title.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useResize from "hooks/useResize";
function Title({ title, swiper, idxActive, length }) {
    const onSwiper = (jump) => swiper.slideTo(idxActive + jump);
    const { onMobile } = useResize();
    const columns = onMobile ? 2 : 5;
    return (
        <div className="title" >
            <span>{title}</span>
            {length > 5 && <div className="title-control">
                <div
                    className={`title-control__left ${idxActive === 0
                        && "title-control__left--disable"}`}
                    onClick={() => onSwiper(-1)}>
                    <IoIosArrowBack />
                </div>
                <div
                    className={`title-control__right ${(idxActive === length - columns || length < columns)
                        && "title-control__right--disable"}`}
                    onClick={() => onSwiper(1)}
                >
                    <IoIosArrowForward />
                </div>
            </div>}
        </div>
    )
}

export default Title;
