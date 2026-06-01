import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
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
        Order by: Relevance
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
          <button
            className="
                  block w-full text-left px-4 py-2
                  hover:bg-gray-100 dark:hover:bg-gray-700
                "
          >
            Relevacne
          </button>
          <button
            className="
                  block w-full text-left px-4 py-2
                  hover:bg-gray-100 dark:hover:bg-gray-700
                "
          >
            Date added
          </button>
          <button
            className="
                  block w-full text-left px-4 py-2
                  hover:bg-gray-100 dark:hover:bg-gray-700
                "
          >
            Name
          </button>
          <button
            className="
                  block w-full text-left px-4 py-2
                  hover:bg-gray-100 dark:hover:bg-gray-700
                "
          >
            Popularity
          </button>
          <button
            className="
                  block w-full text-left px-4 py-2
                  hover:bg-gray-100 dark:hover:bg-gray-700
                "
          >
            Average rating
          </button>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
