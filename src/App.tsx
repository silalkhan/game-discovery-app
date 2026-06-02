import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

//Refactoring: Extracting a Query Object...
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  //declear state variable for storing select genre
  //genric type urgumnt

  //const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  //filtering Games by Platfrom.
  //const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div
      className="
        min-h-screen
        grid
        grid-cols-1
        lg:grid-cols-[200px_1fr]
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

      {/* Sidebar */}
      <aside
        className="
          hidden
          lg:block
       bg-gray-200
       dark:bg-black
        p-4
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
    bg-gray-100
    dark:bg-black
    p-4
  "
      >
        <GameHeading gameQuery={gameQuery} />
        <div className="flex items-center gap-4 mb-6">
          <PlatformSelector
            selectedPlatfrom={gameQuery.platform}
            onSelectedPlatfrom={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </div>

        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
}

export default App;
