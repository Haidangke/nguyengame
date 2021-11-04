const url_config = "/games";

const get_all_short_config = "fields forks.*, expansions.*, cover.*,involved_companies.company.name, involved_companies.developer, name, genres.*, platforms.*;";
const get_all_config = "fields forks.*, expansions.*, cover.*,created_at,  name, genres.*, platforms.*, artworks.*, storyline, summary;";
const get_id_config = "fields websites.*, forks.*, expansions.*, artworks.*, cover.*, game_modes.*, alternative_names.*, created_at, first_release_date, follows, game_engines.*, genres.*,involved_companies.developer, involved_companies.company.name, involved_companies.publisher, keywords.*, name, platforms.abbreviation, rating, aggregated_rating,aggregated_rating_count, release_dates.human, similar_games,  screenshots.*, storyline, summary, videos.*, version_title;";

const get_all_short_where = "where websites != null & artworks != null & videos != null & cover != null & created_at != null&  name != null & genres != null& platforms != null & involved_companies != null";
const get_all_where = "where screenshots != null & cover != null&created_at != null&  name != null& genres != null& platforms != null & summary != null";

export {
    url_config,
    get_all_config,
    get_id_config,
    get_all_short_config,
    get_all_short_where,
    get_all_where
};