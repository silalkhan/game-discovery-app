import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GenreDropdown from "./components/GenreDropdown";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
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
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
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
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </div>

        {/* Heading */}
        <GameHeading gameQuery={gameQuery} />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <PlatformSelector
            selectedPlatfrom={gameQuery.platform}
            onSelectedPlatfrom={(platform) =>
              setGameQuery({ ...gameQuery, platform })
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
