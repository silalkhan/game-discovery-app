import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  //you can also use skeleton instead of spinner best chelang for you.

  if (isLoading) return <GenreListSkeleton />;

  return (
    <ul className="space-y-3">
      {data.map((genre) => (
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
            className="
          text-lg
          text-left
          text-gray-800
          dark:text-gray-100
          hover:text-blue-500
          transition-colors
          cursor-pointer
        "
            onClick={() => onSelectedGenre(genre)}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
