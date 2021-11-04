import { getImage } from "apis/apiConfig";
import React from "react";
import { useHistory } from "react-router-dom";
import maxGraphics from "utils/maxGraphics";
import "./ListArtwork.scss";

function ItemArtwork({ game }) {
    const history = useHistory();

    return (
        <div
            className="game-artworks-item"
            onClick={() => history.push(`/detail/${game.id}`)}
        >
            <div className="game-artworks-item__image">
                {game.artworks &&
                    <img
                        src={getImage(maxGraphics(game?.artworks))}
                        alt={game.name}

                    />}
            </div>
        </div>
    )
}

export default ItemArtwork;