import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul className="space-y-3">
      {data.map((genre) => (
        <li
          key={genre.id}
          className="
            flex
            items-center
            gap-3
            cursor-pointer
            hover:bg-gray-100
            dark:hover:bg-gray-700
            p-2
            rounded-lg
            transition-colors
          "
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="
              w-8
              h-8
              rounded-lg
              object-cover
            "
          />
          <p
            className="
              text-gray-800
              dark:text-gray-100
              font-medium
            "
          >
            {genre.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
