import axios from "axios";
import oauth from 'axios-oauth-client';

export const getOwnerCredentials = oauth.client(axios.create(), {
    url: 'https://id.twitch.tv/oauth2/token',
    grant_type: process.env.REACT_APP_GRANT_TYPE,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
});


const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_MIDDLEWARE}https://api.igdb.com/v4`,
    headers: {
        "Content-Type": "text/plain",
        "Client-ID": process.env.REACT_APP_CLIENT_ID,
    },
});

axiosClient.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('access_token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
);

axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosClient;
