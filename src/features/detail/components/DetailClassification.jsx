import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DetailClassification({ game, id }) {
    const aggregated_rating = Math.floor(game?.aggregated_rating || 0);
    const rating = Math.floor(game?.rating || 0);
    const aggregated_rating_count = game?.aggregated_rating_count || 0;

    const ratings = [
        {
            title: "Điểm số theo nhà phê bình",
            value: aggregated_rating
        },
        {
            title: "Điểm số theo người bên ngoài ",
            value: aggregated_rating_count * 10
        },
        {
            title: "Điểm số theo người dùng IGBD",
            value: rating
        },
    ]

    return (
        <div className="detail-classification">
            <div className="detail-classification__title">
                Xếp hạng - Điểm số
            </div>
            <div className="detail-classification__list">
                {ratings.map(rating => (
                    <div key={rating.title} className="detail-classification__item">
                        <CircularProgressbar
                            value={rating.value}
                            text={rating.value === 0 ? "Không" : rating.value}
                            strokeWidth={4}
                            styles={buildStyles({
                                textColor: "#f5f5f5",
                                pathColor: "#007dfc",
                                trailColor: "#3d3d3d"
                            })}
                        />
                        <div className="detail-classification__item-describe">
                            {rating.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
