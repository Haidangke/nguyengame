import websiteCategory from "config/website";
import PropTypes from 'prop-types';
import React from 'react';

DetailWebsite.propTypes = {
    websites: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.number,
            url: PropTypes.string
        })
    ),
    name: PropTypes.string.isRequired
};

DetailWebsite.defaultProps = {
    websites: [],
    name: ""
}

function DetailWebsite({ websites, name }) {
    const newWebsites = websites?.filter(x => (x.category !== 16 && x !== 11));
    if (newWebsites.length === 0) return <div></div>;
    return (
        <div className="detail-website">
            <div className="detail-website__title">
                Các website liên kết với <span>{name}</span>
            </div>
            <div className="detail-website__list">
                {newWebsites.map(website => (
                    <div key={website.id} className="detail-website__item">
                        <a
                            className="detail-website__item-link"
                            href={website.url}
                        >
                            {websiteCategory?.filter(x =>
                                x.value === website.category)[0]?.icon}
                        </a>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default DetailWebsite;