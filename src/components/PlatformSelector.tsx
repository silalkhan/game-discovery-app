import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatfrom: (Platform: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatfrom, selectedPlatfrom }: Props) => {
  const { data, error } = usePlatforms();
  const [isOpen, setIsOpen] = useState(false);

  if (error) return null;

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2
          px-4 py-2
          bg-gray-200
          dark:bg-gray-700
          rounded-lg
          hover:bg-gray-300
          dark:hover:bg-gray-600
          transition
        "
      >
        {selectedPlatfrom?.name || "Platforms"}
        <BsChevronDown
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="
            absolute mt-2 w-48
            bg-white dark:bg-gray-800
            rounded-lg shadow-lg
            border border-gray-200 dark:border-gray-700
            z-50
          "
        >
          {data.map((platform) => (
            <button
              onClick={() => onSelectedPlatfrom(platform)}
              key={platform.id}
              className="
                block w-full text-left px-4 py-2
                hover:bg-gray-100 dark:hover:bg-gray-700
              "
            >
              {platform.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
