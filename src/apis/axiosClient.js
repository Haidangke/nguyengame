import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_MIDDLEWARE}https://api.igdb.com/v4`,
    headers: {
        "Content-Type": "text/plain",
        "Client-ID": process.env.REACT_APP_CLIENT_ID,
        Authorization: "Bearer wlpllgpy030yjqpo3dt6u8nx8lxlrx",
    },
});

axiosClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
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
