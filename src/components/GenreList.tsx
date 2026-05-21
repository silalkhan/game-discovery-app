import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return null;

  //you can also use skeleton instead of spinner best chelang for you.

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-10">
        <div
          className="
            w-10
            h-10
            border-4
            border-gray-300
            border-t-blue-500
            rounded-full
            animate-spin
          "
        ></div>
      </div>
    );

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
