//import type { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

// interface Props {
//   gameQuery: GameQuery;
// }

// const GameHeading = ({ gameQuery }: Props) => {
//   const genre = useGenre(gameQuery.genreId);

//   const platform = usePlatform(gameQuery.platformId);

//   let heading = "Games";

//   if (gameQuery.searchText) {
//     heading = `"${gameQuery.searchText}" Games`;
//   } else if (platform && genre) {
//     heading = `${platform.name} ${genre.name} Games`;
//   } else if (platform) {
//     heading = `${platform.name} Games`;
//   } else if (genre) {
//     heading = `${genre.name} Games`;
//   }

//   return <h1 className="mb-6 text-3xl font-bold dark:text-white">{heading}</h1>;
// };

// export default GameHeading;

//Managing state by using zustand.... so removing props
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
