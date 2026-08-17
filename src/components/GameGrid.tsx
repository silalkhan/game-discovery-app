import React from "react";
import useGames from "../hooks/useGames";

import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";

function GameGrid() {
  const {
    data,
    error,
    isLoading,
    //here usegame can return inifiniteQuries has we learn  useInfiniteQuries have extra  functions we used here
    //isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  //Grid skeleton
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Grid
  if (error)
    return <p className="text-red-500 text-center mb-4">{error.message}</p>;
  const fetchedGamesCount =
    // in each iteration we have to count page then added to total
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; // here we give default value || 0

  return (
    <InfiniteScroll
      hasMore={!!hasNextPage} // if we have  undefined converted to boolean should apply double explantion !!
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      loader={
        <div className="flex justify-center py-6">
          <div
            className="
        w-8 h-8
        border-4
        border-gray-300
        border-t-blue-600
        rounded-full
        animate-spin
      "
          />
        </div>
      }
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          p-4
        "
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default GameGrid;
