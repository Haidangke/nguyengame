import { getImage } from "apis/apiConfig";
import useResize from "hooks/useResize";
import React from "react";
import maxGraphics from "utils/maxGraphics";

function DetailBackground({ game }) {
    const { onMobile } = useResize();
    const artwork = maxGraphics(game?.artworks);
    const cover = game?.cover?.image_id;

    const background = onMobile ? cover : artwork;
    if (!background) return <></>;
    return (
        <div className="detail-background">
            <img src={getImage(background)} alt="background" />
        </div>
    )
}


export default DetailBackground;