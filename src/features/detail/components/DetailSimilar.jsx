import { gameApi } from "apis/gameApi";
import ListGame from "features/discover/components/ListGame";
import React, { useEffect, useState } from "react";

function DetailSimilar({ similar_games }) {
    const [listSimilar, setListSimilar] = useState({
        isLoading: true,
        isFetched: false,
        data: []
    });
    useEffect(() => {
        setListSimilar({
            isLoading: true,
            isFetched: false,
            data: []
        });
        if (similar_games) {
            try {
                (async function () {
                    const response = await gameApi.getAllShort({ id: similar_games });
                    setListSimilar({
                        isLoading: false,
                        isFetched: true,
                        data: response
                    });
                })();
            } catch (error) {
                console.log(error);
            }
        } else {
            setListSimilar({
                isLoading: false,
                isFetched: true,
                data: []
            });
        }
    }, [similar_games]);


    return (
        <div className="detail__similar">
            <ListGame
                listGame={listSimilar}
                columns={5}
                title="Các game liên quan"
            />
        </div >
    )
}

export default DetailSimilar;