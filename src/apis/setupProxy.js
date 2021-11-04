const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/games', {
            target: 'https://api.igdb.com/v4',
            secure: false,
            changeOrigin: true
        })
    )
}