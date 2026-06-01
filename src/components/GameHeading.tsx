import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let heading = "Games";

  if (gameQuery.searchText) {
    heading = `Search: "${gameQuery.searchText}"`;
  } else if (gameQuery.platform?.name && gameQuery.genre?.name) {
    heading = `${gameQuery.platform.name} ${gameQuery.genre.name} Games`;
  } else if (gameQuery.platform?.name) {
    heading = `${gameQuery.platform.name} Games`;
  } else if (gameQuery.genre?.name) {
    heading = `${gameQuery.genre.name} Games`;
  }

  return (
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
      {heading}
    </h1>
  );
};

export default GameHeading;
