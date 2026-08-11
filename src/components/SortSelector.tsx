import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectSortOrder: (sortOrder: string) => void;
//   sortOrder: string;
// }

// const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const sortOrders = [
//     { value: "", label: "Relevance" },
//     { value: "-added", label: "Date added" },
//     { value: "name", label: "Name" },
//     { value: "-released", label: "Release date" },
//     { value: "-rating", label: "Average rating" },
//     { value: "-metacritic", label: "Metacritic Score" },
//   ];

//   const currentSortOrder = sortOrders.find(
//     (order) => order.value === sortOrder,
//   );

//   return (
//     <div className="relative inline-block">
//       {/* Trigger Button */}
//       <button
//         type="button"
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="
//           flex items-center gap-2
//           px-4 py-2
//           bg-gray-200
//           dark:bg-gray-700
//           rounded-lg
//           hover:bg-gray-300
//           dark:hover:bg-gray-600
//           transition-colors
//         "
//       >
//         Order by: {currentSortOrder?.label || "Relevance"}
//         <BsChevronDown
//           className={`
//             transition-transform duration-300
//             ${isOpen ? "rotate-180" : "rotate-0"}
//           `}
//         />
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div
//           className="
//             absolute left-0 mt-2 w-52
//             overflow-hidden
//             rounded-lg
//             border border-gray-200
//             dark:border-gray-700
//             bg-white
//             dark:bg-gray-800
//             shadow-lg
//             z-50
//           "
//         >
//           {sortOrders.map((order) => (
//             <button
//               key={order.value}
//               type="button"
//               onClick={() => {
//                 onSelectSortOrder(order.value);
//                 setIsOpen(false);
//               }}
//               className={`
//                 block w-full px-4 py-2 text-left
//                 hover:bg-gray-100
//                 dark:hover:bg-gray-700
//                 transition-colors
//                 ${order.value === sortOrder ? "font-bold text-blue-500" : ""}
//               `}
//             >
//               {order.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SortSelector;

//Managing state by using zustand.... so removing props

const SortSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Metacritic Score" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex items-center gap-2
          px-4 py-2
          bg-gray-200
          dark:bg-gray-700
          rounded-lg
          hover:bg-gray-300
          dark:hover:bg-gray-600
          transition-colors
        "
      >
        Order by: {currentSortOrder?.label || "Relevance"}
        <BsChevronDown
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="
            absolute left-0 mt-2 w-52
            overflow-hidden
            rounded-lg
            border border-gray-200
            dark:border-gray-700
            bg-white
            dark:bg-gray-800
            shadow-lg
            z-50
          "
        >
          {sortOrders.map((order) => (
            <button
              key={order.value}
              type="button"
              onClick={() => {
                setSortOrder(order.value);
                setIsOpen(false);
              }}
              className={`
                block w-full px-4 py-2 text-left
                hover:bg-gray-100
                dark:hover:bg-gray-700
                transition-colors
                ${order.value === sortOrder ? "font-bold text-blue-500" : ""}
              `}
            >
              {order.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortSelector;
