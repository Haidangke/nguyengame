import { gameApi } from "apis/gameApi";
import getPastDay from "utils/getPastDay";
import randomArray from "utils/randomArray";


const listIdMostPopular = randomArray([111469, 95340, 115, 2963, 17269, 131800, 27789, 127352, 45131, 154986, 121, 1905, 19560, 154986], 12);
const listIdAppreciate = [7342, 14593, 22917, 37001, 1942, 20150, 121760, 113118, 119388, 7327, 11156];
const listIdHero = randomArray([136981, 127343, 134588, 26855, 23314], 2);
const listIdHeroTwo = randomArray([140839, 65503, 101869, 131687, 110474], 2);
const listIdAdultGame = [139858, 138265, 34950, 75797, 34461, 57546, 17640];
const listIdUserLike = [55044, 5636, 5589, 120176, 114795, 39244];

const fetchListMostPopular = async () =>
    await gameApi.getAllShort({
        id: listIdMostPopular,
        limit: 12
    });

const fetchListAppreciate = async () =>
    await gameApi.getAllShort({
        id: listIdAppreciate,
        limit: 12
    })

const fetchListHero = async () => {
    return await gameApi.getAll({
        id: listIdHero
    })
}

const fetchListUserLike = async () =>
    await gameApi.getAllShort({
        id: listIdUserLike
    })

const fetchListRating = async () =>
    await gameApi.getAllShort({
        limit: 18,
        filter: [
            `created_at > ${getPastDay(365 * 2)}`,
            "aggregated_rating > 90",
        ]
    })

const fetchListHeroTwo = async () =>
    await gameApi.getAll({
        id: listIdHeroTwo
    })

const fetchListRecentlyUpdated = async () =>
    await gameApi.getAllShort({
        limit: 18,
        filter: [
            `updated_at > ${getPastDay(10)}`,
            "release_dates.y > 2020",
            'platforms = (48, 167, 130, 11, 6, 34)'
        ]
    })

const fetchListPlayWithControl = async () =>
    await gameApi.getAllShort({
        limit: 18,
        filter: [
            `created_at > ${getPastDay(365 * 3)}`,
            'platforms = (11, 130, 167)',
        ],
    })

const fetchListCommingSoon = async () =>
    await gameApi.getAllShort({
        filter: [
            "release_dates.y > 2021",
        ],
        limit: 18,
        sort: "created_at asc"
    })


const fetchListAdultGame = async () =>
    await gameApi.getAllShort({
        id: listIdAdultGame,
    });



const fetchListNewReleases = async () =>
    await gameApi.getAllShort({
        limit: 5,
        filter: [
            `created_at > ${getPastDay(10)}`,
            "cover.height != null",
            'platforms.abbreviation != null'
        ],
        sort: "created_at desc"
    })

const fetchListTopFollows = async () =>
    await gameApi.getAllShort({
        limit: 5,
        sort: "created_at desc",
        filter: [
            "cover.height > 1199",
            "cover.height != null",
            "follows != null"
        ]
    })

const fetchListGameOnSwitch = async () =>
    await gameApi.getAllShort({
        limit: 5,
        sort: "created_at desc",
        filter: [
            `created_at > ${getPastDay(60)}`,
            "cover.height != null",
            'platforms.abbreviation = "Switch"'
        ]
    })


export {
    fetchListMostPopular,
    fetchListAppreciate,
    fetchListHero,
    fetchListUserLike,
    fetchListRating,
    fetchListHeroTwo,
    fetchListRecentlyUpdated,
    fetchListPlayWithControl,
    fetchListCommingSoon,
    fetchListAdultGame,
    fetchListNewReleases,
    fetchListTopFollows,
    fetchListGameOnSwitch
};