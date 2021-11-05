import { getImage } from "apis/apiConfig";
import { toDate } from "date-fns";
import React, { Fragment } from "react";
import DetailInfoLoading from "./InfoLoading";

function DetailInfo({ game, loading }) {
    const releaseDate = game?.first_release_date && toDate(game?.first_release_date * 1000).toLocaleDateString()
    const companys = game?.involved_companies;
    const developer = companys?.filter(x => x?.developer).map(x => x?.company?.name).join(", ") || "Chưa có dữ liệu";
    const publisher = companys?.filter(x => x?.publisher).map(x => x?.company?.name).join(", ") || "Chưa có dữ liệu";
    const platforms = game?.platforms?.map(platforms => platforms?.abbreviation).join(', ') || "";

    const genres = game?.genres?.map(x => x?.name).join(', ') || "Chưa có dữ liệu";
    const gameModes = game?.game_modes?.map(x => x?.name).join(', ') || "Chưa có dữ liệu";

    return (
        loading ? <DetailInfoLoading /> : <Fragment>
            <div style={{ position: 'relative' }} className="detail-right__image">
                <img src={getImage(game?.cover?.image_id)} alt="" />
            </div>

            <div className="detail-right__table">
                <div className="detail-right__table-item">
                    <span>Nhà phát triển </span>
                    <span>{developer}</span>
                </div>
                <div className="detail-right__table-item">
                    <span>Nhà phát hành</span>
                    <span>{publisher}</span>
                </div>
                <div className="detail-right__table-item">
                    <span>Ngày ra mắt</span>
                    <span>{releaseDate}</span>
                    {/* <span>{}</span> */}

                </div>
                <div className="detail-right__table-item">
                    <span>Thể loại</span>
                    <span>{genres}</span>
                </div>
                <div className="detail-right__table-item">
                    <span>Chế độ chơi</span>
                    <span>{gameModes}</span>
                </div>
                <div className="detail-right__table-item">
                    <span>Nền tảng</span>
                    <span>{platforms}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default DetailInfo;