import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
//import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
//import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GenreDropdown from "./components/GenreDropdown";

//Undefined: The absence of a value
//null: The intenational absence of a value

export interface GameQuery {
  //genre: number | undefined; // here Genre replace with number | null with undefined
  // genreId?: number; // make this property optinal so clearity genre replace with genreId
  // platform: Platform | null;
  genreId: number | null;
  platformId: number | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genreId: null,
    platformId: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <div
      className="
        min-h-screen
        grid
        grid-cols-1
        lg:grid-cols-[220px_1fr]
        grid-rows-[auto_1fr]
        bg-white
        text-black
        dark:bg-black
        dark:text-white
        transition-colors
        duration-300
      "
    >
      {/* Navbar */}
      <nav className="p-4 lg:col-span-2">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </nav>

      {/* Desktop Sidebar */}
      <aside
        className="
          hidden
          lg:block
          p-4
          bg-gray-200
          dark:bg-black
        "
      >
        <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectedGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        />
      </aside>

      {/* Main Content */}
      <main
        className="
          p-4
          bg-gray-100
          dark:bg-black
        "
      >
        {/* Mobile Genre Dropdown */}
        <div className="lg:hidden mb-4">
          <GenreDropdown
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </div>

        {/* Heading */}
        <GameHeading gameQuery={gameQuery} />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <PlatformSelector
            selectedPlatfromId={gameQuery.platformId}
            onSelectedPlatfrom={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
          />

          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>

        {/* Games */}
        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
}

export default App;
