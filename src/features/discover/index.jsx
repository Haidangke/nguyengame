import Banner from 'features/banner';
import ListGame from 'features/discover/components/ListGame';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Classification from './components/Classification';
import Introduce from './components/Introduce';
import ListArtwork from './components/ListArtwork';
import "./Discover.scss";
import {
    fetchListAppreciate,
    fetchListCommingSoon,
    fetchListGameOnSwitch,
    fetchListHero,
    fetchListHeroTwo,
    fetchListPlayWithControl,
    fetchListMostPopular,
    fetchListNewReleases,
    fetchListRating,
    fetchListRecentlyUpdated,
    fetchListTopFollows,
    fetchListAdultGame
} from './discoverQuery';


export default function Discover() {
    useEffect(() => {
        document.title = "Store Game"
    }, []);

    const listMostPopular = useQuery('listMostPopular', fetchListMostPopular);
    const listAppreciate = useQuery('listAppreciate', fetchListAppreciate);
    const listHero = useQuery('listHero', fetchListHero);
    const listRating = useQuery('listRating', fetchListRating);
    const listHeroTwo = useQuery('listHeroTwo', fetchListHeroTwo);
    const listRecentlyUpdated = useQuery('listRecentlyUpdated', fetchListRecentlyUpdated);
    const listPlayWithControl = useQuery('listPlayWithControl', fetchListPlayWithControl);
    const listCommingSoon = useQuery('listCommingSoon', fetchListCommingSoon);
    const listAdultGame = useQuery('listAdultGame', fetchListAdultGame);

    const listNewReleases = useQuery('listNewReleases', fetchListNewReleases);
    const listTopFollows = useQuery('listTopFollows', fetchListTopFollows);
    const listGameOnSwitch = useQuery('listGameOnSwitch', fetchListGameOnSwitch);

    const classification = {
        listNewReleases,
        listTopFollows,
        listGameOnSwitch
    }

    return (
        <div className="discover">
            <Banner />
            <ListGame listGame={listMostPopular} title="Game phổ biến nhất" main />
            <ListGame listGame={listAppreciate} title="Game có cốt truyện hay nhất" />
            <ListArtwork listGame={listHero} />
            <ListGame listGame={listRating} title="top game theo điểm" />
            <ListArtwork listGame={listHeroTwo} />
            <Classification classification={classification} />
            <ListGame listGame={listRecentlyUpdated} title="Game cập nhật gần đây" />
            <ListGame listGame={listPlayWithControl} title="Game chơi với bộ điều khiển" />
            <ListGame listGame={listCommingSoon} title="Game sắp ra mắt" />
            <ListGame listGame={listAdultGame} title="Game cho người trên 16 tuổi" />
            <Introduce />
        </div>
    )
}
