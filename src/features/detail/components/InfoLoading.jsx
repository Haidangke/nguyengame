import React, { Fragment } from "react";

function DetailInfoLoading() {
    return (
        <Fragment>
            <div style={{ position: 'relative' }} className="detail-right__image">
                <div className="detail-right__image--loading"></div>
            </div>

            <div className="detail__right__table">
                <div className="detail-right__table-item">
                    <span>Nhà phát triển</span>
                    <span></span>
                </div>
                <div className="detail-right__table-item">
                    <span>Nhà phát hành</span>
                    <span></span>
                </div>
                <div className="detail-right__table-item">
                    <span>Ngày ra mắt</span>
                    <span></span>
                </div>
                <div className="detail-right__table-item">
                    <span>Thể loại</span>
                    <span></span>
                </div>
                <div className="detail-right__table-item">
                    <span>Chủ đề</span>
                    <span></span>
                </div>
                <div className="detail-right__table-item">
                    <span>Nền tảng</span>
                    <span></span>
                </div>

                <div className="detail-right__table-item">
                    <span>Chế độ chơi</span>
                    <span></span>
                </div>
                <div className="detail-right__table-item">
                    <span>Góc nhìn người chơi</span>
                    <span></span>
                </div>
            </div>
        </Fragment>
    )
}

export default DetailInfoLoading;