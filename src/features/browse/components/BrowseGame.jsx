import { gameApi } from 'apis/gameApi';
import ItemGame from 'features/discover/components/ListGame/ItemGame';
import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import BrowseGameLoading from './BrowseGameLoading';

function BrowseGame() {
    const {
        genresCheck,
        gameModeCheck,
        platformsCheck,
        sort
    } = useSelector(state => state.browse);

    const filter = (genresCheck, gameModeCheck, platformsCheck) => {
        const filter = [];
        if (genresCheck.length > 0)
            filter.push(`genres = [${genresCheck}]`);

        if (gameModeCheck.length > 0)
            filter.push(`game_modes = [${gameModeCheck}]`);

        if (platformsCheck.length > 0)
            filter.push(`platforms = [${platformsCheck}]`);

        return filter;
    }

    const { data, isLoading, isFetched } = useQuery(['listGame',
        { genresCheck, gameModeCheck, platformsCheck, sort }],
        async () => await gameApi.getAllShort({
            filter: [...filter(genresCheck, gameModeCheck, platformsCheck), "cover != null"],
            limit: 24,
            sort
        })
    );

    if (isLoading) return <BrowseGameLoading />;

    if (isFetched && data.length === 0)
        return (<div className="browse-games--not">
            <h2>Không tìm thấy kết quả</h2>
            <p>Rất tiếc tôi không tìm thấy kết quả nào phù hợp cho bạn :(</p>
        </div>)

    return (
        <div className="browse-games">
            {data.map(game =>
                <div key={game.id} className="browse-game">
                    <ItemGame game={game} />
                </div>
            )}
        </div>
    );
}

export default BrowseGame;