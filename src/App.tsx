//Here we use zustand for client state rander....Or using zustand manage client state in this app...setting up zustand store which holding gameQuery object...

//import { useState } from "react";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
// import NavBar from "./components/NavBar";
// //import type { Genre } from "./hooks/useGenres";
// import PlatformSelector from "./components/PlatformSelector";
// //import type { Platform } from "./hooks/usePlatforms";
// import SortSelector from "./components/SortSelector";
// import GameHeading from "./components/GameHeading";
// import GenreDropdown from "./components/GenreDropdown";

//Undefined: The absence of a value
//null: The intenational absence of a value
//Move to zustnd store..
// export interface GameQuery {
//   //genre: number | undefined; // here Genre replace with number | null with undefined
//   // genreId?: number; // make this property optinal so clearity genre replace with genreId
//   // platform: Platform | null;
//   //genreId: number | null;
//   //platformId: number | null;
//   genreId?: number;
//   platformId?: number;
//   sortOrder: string;
//   searchText: string;
// }

// by using zustand store we don't need useState becoz we removing props...
// function App() {
//   const [gameQuery, setGameQuery] = useState<GameQuery>({
//     genreId: undefined,
//     platformId: undefined,
//     sortOrder: "",
//     searchText: "",
//   });

//   return (
//     <div
//       className="
//         min-h-screen
//         grid
//         grid-cols-1
//         lg:grid-cols-[220px_1fr]
//         grid-rows-[auto_1fr]
//         bg-white
//         text-black
//         dark:bg-black
//         dark:text-white
//         transition-colors
//         duration-300
//       "
//     >
//       {/* Navbar */}
//       <nav className="p-4 lg:col-span-2">
//         <NavBar
//           onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
//         />
//       </nav>

//       {/* Desktop Sidebar */}
//       <aside
//         className="
//           hidden
//           lg:block
//           p-4
//           bg-gray-200
//           dark:bg-black
//         "
//       >
//         <GenreList
//           selectedGenreId={gameQuery.genreId}
//           onSelectedGenre={(genre) =>
//             setGameQuery({ ...gameQuery, genreId: genre.id })
//           }
//         />
//       </aside>

//       {/* Main Content */}
//       <main
//         className="
//           p-4
//           bg-gray-100
//           dark:bg-black
//         "
//       >
//         {/* Mobile Genre Dropdown */}
//         <div className="lg:hidden mb-4">
//           <GenreDropdown
//             selectedGenreId={gameQuery.genreId}
//             onSelectedGenre={(genre) =>
//               setGameQuery({ ...gameQuery, genreId: genre.id })
//             }
//           />
//         </div>

//         {/* Heading */}
//         <GameHeading gameQuery={gameQuery} />

//         {/* Filters */}
//         <div className="flex flex-wrap items-center gap-3 mb-6">
//           <PlatformSelector
//             selectedPlatfromId={gameQuery.platformId}
//             onSelectedPlatfrom={(platform) =>
//               setGameQuery({ ...gameQuery, platformId: platform.id })
//             }
//           />

//           <SortSelector
//             sortOrder={gameQuery.sortOrder}
//             onSelectSortOrder={(sortOrder) =>
//               setGameQuery({ ...gameQuery, sortOrder })
//             }
//           />
//         </div>

//         {/* Games */}
//         <GameGrid gameQuery={gameQuery} />
//       </main>
//     </div>
//   );
// }

//export default App;
//Here we managing state by using zustand store...so removing props...
// function App() {
//   return (
//     <div
//       className="
//         min-h-screen
//         grid
//         grid-cols-1
//         lg:grid-cols-[220px_1fr]
//         grid-rows-[auto_1fr]
//         bg-white
//         text-black
//         dark:bg-black
//         dark:text-white
//         transition-colors
//         duration-300
//       "
//     >
//       {/* Navbar */}
//       <nav className="p-4 lg:col-span-2">
//         <NavBar />
//       </nav>

//       {/* Desktop Sidebar */}
//       <aside
//         className="
//           hidden
//           lg:block
//           p-4
//           bg-gray-200
//           dark:bg-black
//         "
//       >
//         <GenreList />
//       </aside>

//       {/* Main Content */}
//       <main
//         className="
//           p-4
//           bg-gray-100
//           dark:bg-black
//         "
//       >
//         {/* Mobile Genre Dropdown */}
//         <div className="lg:hidden mb-4">
//           <GenreDropdown />
//         </div>

//         {/* Heading */}
//         <GameHeading />

//         {/* Filters */}
//         <div className="flex flex-wrap items-center gap-3 mb-6">
//           <PlatformSelector />

//           <SortSelector />
//         </div>

//         {/* Games */}
//         <GameGrid />
//       </main>
//     </div>
//   );
// }

//Here we do reactRouting..
// function App() {
//   return;
// }
//Move all code from appComponent to homePage or homeComponent so app component no longer need to use....
//export default App;
