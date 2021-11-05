import { gameApi } from "apis/gameApi";
import Topbar from "features/topbar";
import Comment from "features/comment";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailBackground from "./components/Background";
import DetailBanner from "./components/Banner";
import DetailClassification from "./components/Classification";
import DetailDescribe from "./components/Describe";
import DetailInfo from "./components/Info";
import DetailJointDeveloper from "./components/JointDeveloper";
import DetailSimilar from "./components/Similar";
import DetailWebsite from "./components/Website";
import "./Detail.scss";


function Detail() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    useLayoutEffect(() => {
        setGame(null);
        try {
            (async function () {
                setLoading(true);
                const [data] = await gameApi.getId(id);
                setGame(data);
                setLoading(false);
                document.title = data.name;
            })();
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    return (
        <div className="detailpage">
            <DetailBackground game={game} />

            <Topbar name={game?.name} />

            <div className="detail">
                {loading ? <div className="detail-name detail-name--loading"></div> :
                    <div className="detail-name">{game?.name}</div>}

                <div className="detail-container">
                    <div className="detail-left">
                        <DetailBanner
                            loading={loading}
                            screenshots={game?.screenshots}
                            videos={game?.videos}
                            id={id}
                        />
                        <DetailDescribe game={game} id={id} />
                        <DetailWebsite websites={game?.websites} name={game?.name} />
                        <DetailClassification game={game} id={id} />
                    </div>
                    <div className="detail-right">
                        <div className="detail-right__wrapper">
                            <DetailInfo game={game} loading={loading} />
                        </div>
                    </div>
                </div>

            </div>
            <DetailJointDeveloper involved_companies={game?.involved_companies} />
            <DetailSimilar similar_games={game?.similar_games} />
            <Comment gameId={id} />
        </div>
    )
}

export default Detail;