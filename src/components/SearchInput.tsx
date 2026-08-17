import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);

  const navigate = useNavigate();

  return (
    <form
      className="min-w-0 flex-1"
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          setSearchText(ref.current.value.trim());
          navigate("/");
        }
      }}
    >
      <div className="relative w-full">
        {/* Search Icon */}
        <BsSearch
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            dark:text-gray-500
          "
          size={16}
        />

        {/* Search Input */}
        <input
          ref={ref}
          type="text"
          placeholder="Search games..."
          className="
            w-full
            rounded-full
            border
            border-gray-200
            bg-gray-100
            py-2.5
            pl-11
            pr-4
            text-sm
            text-gray-800
            outline-none
            transition-all
            duration-200

            placeholder:text-gray-400

            hover:border-gray-300

            focus:border-blue-500
            focus:bg-white
            focus:ring-2
            focus:ring-blue-500/20

            dark:border-gray-800
            dark:bg-gray-900
            dark:text-white
            dark:placeholder:text-gray-500

            dark:hover:border-gray-700

            dark:focus:border-blue-500
            dark:focus:bg-gray-900
          "
        />
      </div>
    </form>
  );
};

export default SearchInput;
