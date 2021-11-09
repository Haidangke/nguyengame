const getVideo = (id) => `https://youtu.be/${id}`;

const getBgVideo = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const getImage = (id) => `https://images.igdb.com/igdb/image/upload/t_1080p/${id}.jpg`;

const getImageLow = (id) => `https://images.igdb.com/igdb/image/upload/t_720p/${id}.jpg`;

const getImageSmall = (id) => `https://images.igdb.com/igdb/image/upload/t_cover_small/${id}.jpg`;

export { getVideo, getBgVideo, getImage, getImageLow, getImageSmall };



