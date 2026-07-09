import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId,
  );

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
