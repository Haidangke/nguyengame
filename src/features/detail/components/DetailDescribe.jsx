import { getImage } from 'apis/apiConfig';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
function DetailDescribe({ game, id }) {
    const [isShow, setIsShow] = useState(false);
    const storyline = game?.storyline && game?.storyline.replaceAll('\n', '<br />');
    const artworks = game?.artworks;
    const summary = game?.summary;
    const describeRef = useRef(null);

    const maxHeight = !isShow ? '400px' : 'none';

    const handleShowDescribe = () => {
        if (isShow) describeRef.current.scrollIntoView();
        setIsShow(!isShow);
    };

    useEffect(() => {
        setIsShow(false);
    }, [id]);

    return (
        <Fragment>
            <div
                ref={describeRef}
                style={{ maxHeight }}
                className="detail-describe"
            >

                <div className="detail-summary">
                    <span>Tóm tắt trò chơi</span>
                    {summary}
                </div>

                {storyline && <div
                    className="detail-storyline"
                    dangerouslySetInnerHTML={{ __html: "<span>Câu chuyện của trò chơi</span>" + storyline }}
                ></div>}

                <div className="detail-describe__artworks">
                    {artworks?.map((artwork, index) => (
                        <div
                            key={artwork.id}
                            className={`detail-describe__artworks-item 
                            ${(index % 3 === 0 || artworks.length <= 2) && "detail-describe__artworks-item--double"}`}
                        >
                            <img src={getImage(artwork?.image_id)} alt="artwork" />
                        </div>
                    ))}
                </div>
            </div>


            {artworks && <div className="detail-button-show">
                {!isShow && <div className="detail-button-show__overplay"></div>}
                <span onClick={handleShowDescribe}>
                    {!isShow ?
                        <>show more <MdKeyboardArrowDown /> </> :
                        <>show less <MdKeyboardArrowUp /> </>}
                </span>
            </div>}
        </Fragment>
    )
}

export default DetailDescribe;