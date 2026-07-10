import type { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  let heading = "Games";

  if (gameQuery.searchText) {
    heading = `"${gameQuery.searchText}" Games`;
  } else if (platform && genre) {
    heading = `${platform.name} ${genre.name} Games`;
  } else if (platform) {
    heading = `${platform.name} Games`;
  } else if (genre) {
    heading = `${genre.name} Games`;
  }

  return <h1 className="mb-6 text-3xl font-bold dark:text-white">{heading}</h1>;
};

export default GameHeading;
