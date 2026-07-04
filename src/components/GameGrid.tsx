import React from "react";
import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";
//import type { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;

  //remove..
  //selectedGenre: Genre | null;
  //selectedPlatform: Platform | null;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    //here usegame can return inifiniteQuries has we learn  useInfiniteQuries have extra  functions we used here
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  //Grid skeleton
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Grid
  if (error)
    return <p className="text-red-500 text-center mb-4">{error.message}</p>;
  return (
    <>
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
      {hasNextPage && (
        <div className="flex justify-start mt-8 px-4">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="
        w-full
        sm:w-auto
        max-w-xs
        px-6
        py-3
        rounded-lg
        bg-blue-600
        text-white
        font-medium
        hover:bg-blue-700
        active:scale-95
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}

export default GameGrid;

// {
//Map each page in react fragment
//Removed
/* {data?.results.map((game) => (
  <GameCardContainer key={game.id}>
    <GameCard game={game} />
  </GameCardContainer>
))} */
// }
