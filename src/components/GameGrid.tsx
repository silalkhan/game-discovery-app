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
  const { data, error, isLoading } = useGames(gameQuery);
  //Grid skeleton
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Grid
  return (
    <>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </div>
    </>
  );
}

export default GameGrid;
