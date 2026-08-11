import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectedPlatfrom: (platform: Platform) => void;
//   // selectedPlatfrom: Platform | null;
//   //selectedPlatfromId: number | null;
//   selectedPlatfromId?: number;
// }

// const PlatformSelector = ({
//   onSelectedPlatfrom,
//   // selectedPlatfromId: selectedPlatfrom,
//   selectedPlatfromId,
// }: Props) => {
//   const { data, error } = usePlatforms();
//   const [isOpen, setIsOpen] = useState(false);
//   const selectedPlatfrom = usePlatform(selectedPlatfromId);

//   if (error) return null;

//   return (
//     <div className="relative inline-block">
//       {/* Button */}
//       <button
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="
//           flex items-center gap-2
//           px-4 py-2
//           bg-gray-200
//           dark:bg-gray-700
//           rounded-lg
//           hover:bg-gray-300
//           dark:hover:bg-gray-600
//           transition
//         "
//       >
//         {selectedPlatfrom?.name || "Platforms"}

//         <BsChevronDown
//           className={`
//             transition-transform duration-300
//             ${isOpen ? "rotate-180" : "rotate-0"}
//           `}
//         />
//       </button>

//       {/* Dropdown */}
//       {isOpen && (
//         <div
//           className="
//             absolute mt-2 w-48
//             bg-white dark:bg-gray-800
//             rounded-lg shadow-lg
//             border border-gray-200 dark:border-gray-700
//             z-50
//           "
//         >
//           {data?.results.map((platform) => (
//             <button
//               key={platform.id}
//               onClick={() => {
//                 onSelectedPlatfrom(platform);
//                 setIsOpen(false); // ✅ CLOSE DROPDOWN
//               }}
//               className="
//                 block w-full text-left px-4 py-2
//                 hover:bg-gray-100 dark:hover:bg-gray-700
//                 transition
//               "
//             >
//               {platform.name}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlatformSelector;

//Managing state by using zustand.... so removing props...

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const SetSelectedPlatfromId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatfromId = useGameQueryStore((s) => s.gameQuery.platformId);
  const [isOpen, setIsOpen] = useState(false);

  const selectedPlatfrom = usePlatform(selectedPlatfromId);

  if (error) return null;

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
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
          {data?.results.map((platform) => (
            <button
              key={platform.id}
              onClick={() => {
                SetSelectedPlatfromId(platform.id);
                setIsOpen(false); // ✅ CLOSE DROPDOWN
              }}
              className="
                block w-full text-left px-4 py-2
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition
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
