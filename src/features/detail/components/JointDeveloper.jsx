import { gameApi } from "apis/gameApi";
import ListGame from "features/discover/components/ListGame";
import React, { useEffect, useState } from "react";

function DetailJointDeveloper({ involved_companies }) {
    const [listJointDeveloper, setListJointDeveloper] = useState({
        data: [],
        isFetched: false,
        isLoading: true
    });
    const [nameDeveloper, setNameDeveloper] = useState("");
    useEffect(() => {

        setListJointDeveloper({
            data: [],
            isFetched: false,
            isLoading: true
        });
        setNameDeveloper("");

        if (involved_companies) {
            const [developer] = involved_companies?.filter(x => x.developer);
            const [publisher] = involved_companies?.filter(x => x.publisher)

            const nameDeveloper = developer?.company?.name || publisher?.company?.name;
            setNameDeveloper(nameDeveloper);

            try {
                (async function () {
                    const response = await gameApi.getAllShort({
                        filter: [`involved_companies.company.name = "${nameDeveloper}"`],
                        sort: "created_at desc",
                        limit: 18
                    })
                    setListJointDeveloper({
                        data: response.length > 1 ? response : [],
                        isFetched: true,
                        isLoading: false
                    });
                })();
            } catch (error) {
                console.log(error);
            }
        } else {
            setListJointDeveloper({
                data: [],
                isFetched: true,
                isLoading: false
            });
        }
    }, [involved_companies]);


    return (
        <div className="detail__joint">
            <ListGame
                listGame={listJointDeveloper}
                columns={5}
                title={`Các game của ${nameDeveloper}`}
            />
        </div>
    )
}

export default DetailJointDeveloper;