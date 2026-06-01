import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (text: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-md">
      {/* icon */}
      <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      {/* input */}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const text = e.target.value;
          setValue(text);
          onSearch(text);
        }}
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
          transition
        "
      />
    </div>
  );
};

export default SearchInput;
