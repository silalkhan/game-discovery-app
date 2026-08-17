import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  //This store for selectedGenreId..
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  //This store for updating selectedGenreId..
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  //you can also use skeleton instead of spinner best chelang for you.

  if (isLoading) return <GenreListSkeleton />;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 px-2 text-gray-900 dark:text-white">
        Genres
      </h1>
      <ul className="space-y-3">
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className="
          flex
          items-center
          gap-3
          p-2
          rounded-lg
          hover:underline
          hover:bg-gray-100 
          dark:hover:bg-gray-700 
          "
          >
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              className="w-8 h-8 rounded-lg object-cover"
            />

            <button
              onClick={() => setSelectedGenreId(genre.id)}
              className={`text-lg text-left cursor-pointer transition-colors
              ${
                genre.id === selectedGenreId
                  ? "font-bold text-blue-500"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
