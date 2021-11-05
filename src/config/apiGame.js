

const get_all_short_config = "fields " + [" cover.*", "involved_companies.company.name", "involved_companies.developer", "name", "genres.*", "platforms.*"].join(",") + ";";
const get_all_config = "fields " + ["cover.*", "created_at", "name", "genres.*", "platforms.*", "artworks.*", "storyline", "summary"].join(",") + ";";
const get_id_config = "fields " + ["websites.*", "artworks.*", "cover.*", "game_modes.*", "created_at", "first_release_date", "follows", "genres.*", "involved_companies.developer", "involved_companies.company.name", "involved_companies.publisher", "name", "platforms.abbreviation", "rating", "aggregated_rating", "aggregated_rating_count", "release_dates.human", "similar_games", "screenshots.*", "storyline", "summary", "videos.*"].join(",") + ";";

const get_all_short_where = "where " + ["websites != null", "artworks != null", "videos != null", "cover != null", "created_at != null", "genres != null", "platforms != null", "involved_companies != null"].join("&");
const get_all_where = "where" + ["screenshots != null", "cover != null", "created_at != null", " genres != null", "platforms != null", "summary != null"].join("&");

export {
    get_all_config,
    get_id_config,
    get_all_short_config,
    get_all_short_where,
    get_all_where
};