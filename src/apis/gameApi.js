import {
    get_all_config,
    get_all_short_config,
    get_all_short_where,
    get_all_where,
    get_id_config
} from "config/apiGame";
import convertParams from "utils/convertParams";
import axiosClient from "./axiosClient";

export const gameApi = {
    getAll(params) {
        return axiosClient.post(
            "/games",
            get_all_config + convertParams(params, get_all_short_where)
        );
    },

    getAllShort(params) {
        return axiosClient.post(
            "/games",
            get_all_short_config + convertParams(params, get_all_short_where)
        );
    },

    getId(id) {
        return axiosClient.post(
            "/games",
            `${get_id_config} where id = ${id};`
        );
    },

    search(like, params) {
        return axiosClient.post(
            "/games",
            `${get_all_config} search "${like}"; ${convertParams(params, get_all_where)}`
        );
    },
};
