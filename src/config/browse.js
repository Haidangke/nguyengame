const platforms = [
    {
        id: 6,
        abbreviation: "PC"
    }, {
        id: 11,
        abbreviation: "XBOX"
    }, {
        id: 12,
        abbreviation: "X360"
    }, {
        id: 34,
        abbreviation: "Android"
    }, {
        id: 39,
        abbreviation: "iOS"
    }, {
        id: 48,
        abbreviation: "PS4"
    }, {
        id: 130,
        abbreviation: "Switch"
    }, {
        id: 167,
        abbreviation: "PS5"
    }

].sort((b, a) => a.abbreviation.length - b.abbreviation.length);

const gameMode = [
    {
        id: 1,
        name: "Một người chơi"
    }, {
        id: 2,
        name: "Nhiều người chơi"
    }, {
        id: 3,
        name: "Co-op"
    }, {
        id: 4,
        name: "Chia nhỏ màn hình"
    }, {
        id: 5,
        name: "Online nhiều người chơi"
    }
].sort((b, a) => a.name.length - b.name.length);

const genres = [
    {
        id: 2,
        name: "Point and Click"
    }, {
        id: 4,
        name: "Chiến đấu"
    }, {
        id: 5,
        name: "Bắn súng"
    }, {
        id: 7,
        name: "Âm nhạc"
    }, {
        id: 8,
        name: "Đi cảnh"
    }, {
        id: 9,
        name: "Giải đố"
    }, {
        id: 10,
        name: "Đua xe"
    }, {
        id: 12,
        name: "Nhập vai"
    }, {
        id: 14,
        name: "Thể thao"
    }, {
        id: 13,
        name: "Giả lập"
    }, 
    // {
    //     id: 15,
    //     name: "Chiến lược"
    // }, {
    //     id: 16,
    //     name: "Chiến lược theo lượt"
    // }, 
    {
        id: 24,
        name: "Chiến thuật"
    },
    //  {
    //     id: 25,
    //     name: "Cận chiến"
    // }, 
    {
        id: 31,
        name: "Phiêu lưu"
    }, {
        id: 32,
        name: "Indie"
    }, 
    // {
    //     id: 33,
    //     name: "Giải trí"
    // },
    //  {
    //     id: 34,
    //     name: "Tiểu thuyết thực"
    // },
     {
        id: 35,
        name: "Thẻ bài"
    }, {
        id: 36,
        name: "Moba"
    }
].sort((b, a) => a.name.length - b.name.length);

const listBrowseSort = [
    {
        name: 'Mới ra mắt',
        value: 'first_release_date desc'
    }, {
        name: 'Ra mắt lâu nhất',
        value: 'first_release_date asc'
    }
];


export { platforms, gameMode, genres, listBrowseSort };