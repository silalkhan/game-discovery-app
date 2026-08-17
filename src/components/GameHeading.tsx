import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);

  let heading = "Games";

  if (searchText) {
    heading = `"${searchText}" Games`;
  } else if (platform && genre) {
    heading = `${platform.name} ${genre.name} Games`;
  } else if (platform) {
    heading = `${platform.name} Games`;
  } else if (genre) {
    heading = `${genre.name} Games`;
  }

  return <h1 className="text-3xl font-bold mb-6 dark:text-white">{heading}</h1>;
};

export default GameHeading;
