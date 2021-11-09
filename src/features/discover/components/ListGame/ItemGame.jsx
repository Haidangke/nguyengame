import { getImage, getImageLow } from "apis/apiConfig";
import useResize from "hooks/useResize";
import React from "react";
import { useHistory } from "react-router-dom";
import "./ListGame.scss";
function ItemGame({ game }) {
    const { onMobile } = useResize();
    const history = useHistory();
    const imageUrl = onMobile ? getImageLow(game?.cover?.image_id) : getImage(game?.cover?.image_id);
    const companys = game?.involved_companies;
    const platforms = game?.platforms;
    const genres = game?.genres;

    const info = {
        developer: companys?.filter(x => x.developer).map(x => x.company.name).join(",") || "",
        platforms: platforms?.map(x => x?.abbreviation).join(', ') || "",
        genres: genres?.map(x => x.name).join(" | ") || ""
    }

    const onRedirect = () => history.push(`/detail/${game?.id}`);
    return (
        <div
            className="game-item"
            onClick={onRedirect}
        >
            <div className="game-item__image">
                <img src={imageUrl} alt="background" />
            </div>
            <div className="game-info">
                <div className="game-info__name">
                    {game?.name}
                </div>
                <div className="game-info__platforms">
                    {info.platforms}
                </div>
                <div className="game-info__developer">
                    {info.developer}
                </div>
                <div className="game-info__genres">
                    {info.genres}
                </div>

            </div>
        </div>
    )
}

export default ItemGame;