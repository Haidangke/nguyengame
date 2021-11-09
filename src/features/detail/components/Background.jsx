import { getImage, getImageLow } from "apis/apiConfig";
import useResize from "hooks/useResize";
import React from "react";
import maxGraphics from "utils/maxGraphics";

function DetailBackground({ game }) {
    const { onMobile } = useResize();
    const artwork = maxGraphics(game?.artworks);
    const cover = game?.cover?.image_id;

    const background = onMobile ? cover : artwork;
    const imageUrl = (url) => onMobile ? getImageLow(url) : getImage(url);

    if (!background) return <></>;
    return (
        <div className="detail-background">
            <img src={imageUrl(background)} alt="background" />
        </div>
    )
}


export default DetailBackground;