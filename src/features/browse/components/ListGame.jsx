import { gameApi } from 'apis/gameApi';
import ItemGame from 'features/discover/components/ListGame/ItemGame';
import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';
import { useInfiniteQuery } from 'react-query';
import { useSelector } from 'react-redux';
import BrowseGameLoading from './ListGameLoading';

function BrowseGame() {
    const {
        genresCheck,
        gameModeCheck,
        platformsCheck,
        sort,
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
    };

    const {
        status,
        data,
        isFetched,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,

    } = useInfiniteQuery(['listGame',
        { genresCheck, gameModeCheck, platformsCheck, sort }],
        async ({ pageParam = 0 }) => await gameApi.getAllShort({
            filter: [...filter(genresCheck, gameModeCheck, platformsCheck), "cover != null"],
            limit: 24,
            sort,
            offset: 24 * pageParam
        }), {
        getNextPageParam: lastPage => lastPage.length > 0 ?? false

    });

    if (status === 'loading') return <BrowseGameLoading />;

    if (isFetched && data.pages[0].length === 0)
        return (<div className="browse-games--not">
            <h2>Không tìm thấy kết quả</h2>
            <p>Rất tiếc tôi không tìm thấy kết quả nào phù hợp cho bạn :(</p>
        </div>)

    return (
        <Fragment>
            <div className="browse-games">
                {data.pages?.map((page, index) => (
                    <React.Fragment key={index}>
                        {page?.map(game => (
                            <div key={game.id} className="browse-game">
                                <ItemGame game={game} />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>

            {hasNextPage && <div
                className="browse-limit"
                onClick={() => fetchNextPage()}
            >
                {isFetchingNextPage ?
                    <ReactLoading
                        type="spinningBubbles"
                        color="white"
                        width={20}
                        height={20}
                    /> : 'Xem thêm'
                }
            </div>}

        </Fragment>
    )
}

export default BrowseGame;