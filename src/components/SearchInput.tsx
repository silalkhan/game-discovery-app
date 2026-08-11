import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const SearchInput = ({ onSearch }: Props) => {
//   const ref = useRef<HTMLInputElement>(null);

//   return (
//     <form
//       className="flex-1 min-w-0"
//       onSubmit={(event) => {
//         event.preventDefault();

//         if (ref.current) {
//           onSearch(ref.current.value.trim());
//         }
//       }}
//     >
//       <div className="relative w-full">
//         <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

//         <input
//           type="text"
//           ref={ref}
//           placeholder="Search games..."
//           className="
//         w-full
//         pl-10
//         pr-4
//         py-2
//         rounded-full
//         bg-gray-100
//         dark:bg-gray-800
//         text-gray-800
//         dark:text-white
//         placeholder-gray-400
//         focus:outline-none
//         focus:ring-2
//         focus:ring-blue-500
//       "
//         />
//       </div>
//     </form>
//   );
// };

// export default SearchInput;

//Managing state by using zustand.... so removing props

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  //when the user submits the form we need to call onSearch to update search text to this value onSearch(ref.current.value.trim());Now we use GameQueryStore...
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);
  return (
    <form
      className="flex-1 min-w-0"
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          setSearchText(ref.current.value.trim());
        }
      }}
    >
      <div className="relative w-full">
        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          ref={ref}
          placeholder="Search games..."
          className="
        w-full
        pl-10
        pr-4
        py-2
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
