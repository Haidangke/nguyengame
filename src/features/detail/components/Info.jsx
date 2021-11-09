import { getImage } from "apis/apiConfig";
import { toDate } from "date-fns";
import React, { Fragment, useEffect, useState } from "react";
import DetailInfoLoading from "./InfoLoading";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function DetailInfo({ game, loading }) {
    const releaseDate = game?.first_release_date && toDate(game?.first_release_date * 1000).toLocaleDateString()
    const companys = game?.involved_companies;
    const developer = companys?.filter(x => x?.developer).map(x => x?.company?.name).join(", ") || "Chưa có dữ liệu";
    const publisher = companys?.filter(x => x?.publisher).map(x => x?.company?.name).join(", ") || "Chưa có dữ liệu";
    const platforms = game?.platforms?.map(platforms => platforms?.abbreviation).join(', ') || "";

    const genres = game?.genres?.map(x => x?.name).join(', ') || "Chưa có dữ liệu";
    const gameModes = game?.game_modes?.map(x => x?.name).join(', ') || "Chưa có dữ liệu";
    const player_perspectives = game?.player_perspectives?.map(x => x?.name).join(', ') || "Chưa có dữ liệu";
    const themes = game?.themes?.map(x => x?.name).join(', ') || "Chưa có dữ liệu";

    const [listShow, setListShow] = useState([]);
    const [listIsShow, setListIsShow] = useState([]);

    const listInfo = [
        { title: 'Nhà phát triển', value: developer },
        { title: 'Nhà phát hành', value: publisher },
        { title: 'Ngày ra mắt', value: releaseDate },
        { title: 'Thể loại', value: genres },
        { title: 'Chủ đề', value: themes },
        { title: 'Chế độ chơi', value: gameModes },
        { title: 'Nền tảng', value: platforms },
        { title: 'Góc nhìn người chơi', value: player_perspectives }
    ];

    const handleOpenShow = (index) => {
        const curListIsShow = [...listIsShow];
        curListIsShow[index] = true;
        setListIsShow(curListIsShow);
    }

    const handleCLoseShow = (index) => {
        const curListIsShow = [...listIsShow];
        curListIsShow[index] = false;
        setListIsShow(curListIsShow);
    }

    useEffect(() => {
        setListShow([
            developer.length > 24,
            publisher.length > 24,
            false,
            genres.length > 24,
            themes.length > 24,
            gameModes.length > 24,
            platforms.length > 24,
            player_perspectives.length > 24
        ])
    }, [developer, game, gameModes, genres, platforms, publisher, themes, player_perspectives]);


    return (
        loading ? <DetailInfoLoading /> : <Fragment>
            <div style={{ position: 'relative' }} className="detail-right__image">
                <img src={getImage(game?.cover?.image_id)} alt="" />
            </div>

            <div className="detail-right__table">
                {listInfo.map((info, index) =>
                    <div
                        key={info.title}
                        className={`detail-right__table-item ${listShow[index] && 'detail-right__table-item--more'} ${listIsShow[index] && 'detail-right__table-item--show'}`}
                    >
                        <span>{info.title}</span>
                        <span>{info.value}</span>
                        {listShow[index] && (listIsShow[index]
                            ? <IoIosArrowDown onClick={() => handleCLoseShow(index)} /> :
                            <IoIosArrowUp onClick={() => handleOpenShow(index)} />)}

                    </div>)
                }
            </div>
        </Fragment>
    )
}

export default DetailInfo;