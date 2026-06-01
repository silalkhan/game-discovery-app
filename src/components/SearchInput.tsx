import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-full max-w-md"
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          onSearch(ref.current.value.trim());
        }
      }}
    >
      <div className="relative w-full">
        {/* icon */}
        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        {/* input */}
        <input
          type="text"
          ref={ref}
          placeholder="Search games..."
          className="
            w-full
            pl-10 pr-4 py-2
            rounded-full
            bg-gray-100
            dark:bg-gray-800
            text-gray-800
            dark:text-white
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>
    </form>
  );
};

export default SearchInput;
