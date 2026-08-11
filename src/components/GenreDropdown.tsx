import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

// interface Props {
//   selectedGenreId?: number;
//   onSelectedGenre: (genre: Genre) => void;
// }

// function GenreDropdown({ selectedGenreId, onSelectedGenre }: Props) {
//   const { data } = useGenres();
//   const [isOpen, setIsOpen] = useState(false);

//   const selectedGenre =
//     data?.results.find((g) => g.id === selectedGenreId) ?? null;

//   return (
//     <div className="relative w-full">
//       <button
//         type="button"
//         onClick={() => setIsOpen((open) => !open)}
//         className="flex w-full items-center justify-between rounded-lg bg-gray-200 px-4 py-2 dark:bg-gray-800"
//       >
//         {selectedGenre?.name ?? "Genres"}
//         <BsChevronDown
//           className={`transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute z-50 mt-2 max-h-80 w-full overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-gray-900">
//           {data?.results.map((genre) => {
//             const isActive = genre.id === selectedGenreId;

//             return (
//               <button
//                 key={genre.id}
//                 type="button"
//                 onClick={() => {
//                   onSelectedGenre(genre);
//                   setIsOpen(false);
//                 }}
//                 className={`flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                   isActive
//                     ? "font-bold text-blue-500 underline bg-gray-100 dark:bg-gray-700"
//                     : "text-gray-800 dark:text-gray-100"
//                 }`}
//               >
//                 <img
//                   src={getCroppedImageUrl(genre.image_background)}
//                   alt={genre.name}
//                   className="h-8 w-8 rounded-md object-cover"
//                 />
//                 <span>{genre.name}</span>
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default GenreDropdown;

//Managing state by using zustand.... so removing props...

function GenreDropdown() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data } = useGenres();
  const [isOpen, setIsOpen] = useState(false);

  const selectedGenre =
    data?.results.find((genre) => genre.id === genreId) ?? null;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between rounded-lg bg-gray-200 px-4 py-2 dark:bg-gray-800"
      >
        {selectedGenre?.name ?? "Genres"}

        <BsChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 max-h-80 w-full overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-gray-900">
          {data?.results.map((genre) => {
            const isActive = genre.id === genreId;

            return (
              <button
                key={genre.id}
                type="button"
                onClick={() => {
                  setGenreId(genre.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive
                    ? "bg-gray-100 font-bold text-blue-500 underline dark:bg-gray-700"
                    : "text-gray-800 dark:text-gray-100"
                }`}
              >
                <img
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                  className="h-8 w-8 rounded-md object-cover"
                />

                <span>{genre.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default GenreDropdown;
