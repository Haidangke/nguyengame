import { getImageLow } from "apis/apiConfig";
import React from "react";
import { useHistory } from "react-router-dom";

function ClassificationItem({ classificationItem }) {
    const history = useHistory();

    return (
        <div className="classification-wrapper">
            <div className="classification-title">
                {classificationItem?.title}
            </div>
            <div className="classification-list">
                {classificationItem?.value?.map(newReleases => (
                    <div
                        key={newReleases.id}
                        className="classification-item"
                        onClick={() => history.push(`/detail/${newReleases.id} `)}
                    >
                        <div className="classification-item__image">
                            <img src={getImageLow(newReleases?.cover.image_id)} alt="classification" />
                        </div>
                        <div className="classification-item__info">
                            <div className="classification-item__name">{newReleases.name}</div>
                            <div className="classification-item__platform">
                                {newReleases?.platforms?.map(platforms =>
                                    platforms?.abbreviation).join(', ')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClassificationItem;