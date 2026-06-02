import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import type { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

function GenreDropdown({ selectedGenre, onSelectedGenre }: Props) {
  const { data: genres } = useGenres();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center justify-between
          w-full
          px-4 py-2
          rounded-lg
          bg-gray-200
          dark:bg-gray-800
        "
      >
        {selectedGenre?.name || "Genres"}

        <BsChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="
            absolute mt-2 w-full
            max-h-80 overflow-y-auto
            bg-white dark:bg-gray-900
            rounded-lg shadow-lg
            z-50
          "
        >
          {genres.map((genre) => {
            const isActive = genre.id === selectedGenre?.id;

            return (
              <button
                key={genre.id}
                onClick={() => {
                  onSelectedGenre(genre);
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-3
                  w-full text-left
                  px-3 py-2
                  transition-colors

                  hover:bg-gray-100 dark:hover:bg-gray-700

                  ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-700 font-bold text-blue-500 underline"
                      : "text-gray-800 dark:text-gray-100"
                  }
                `}
              >
                <img
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                  className="w-8 h-8 rounded-md object-cover"
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
