import React from "react";
import "./Introduce.scss";
function Introduce() {
    return (
        <div className="introduce">
            <div className="introduce-left">
                <img className="introduce-image" src="https://firebasestorage.googleapis.com/v0/b/appgameke.appspot.com/o/introduce.png?alt=media&token=af25f0ff-6b18-463b-b34f-f35aa3b018e3" alt="" />
            </div>
            <div className="introduce-right">
                <div className="introduce-title">
                    Browse
                </div>
                <div className="introduce-describe">
                    Khám phá danh mục của tôi đế tìm kiếm những trò chơi yêu thích tiếp theo của bạn!
                </div>
                <div className="introduce-button">
                    Xem thêm
                </div>
            </div>
        </div>
    )
}

export default Introduce;