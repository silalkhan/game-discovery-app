import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

//Refactoring: Extracting a Query Object...
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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

        dark:bg-gray-900
        dark:text-white

        transition-colors
        duration-300
      "
    >
      {/* Navbar */}
      <nav className="p-4 lg:col-span-2">
        <NavBar />
      </nav>

      {/* Sidebar */}
      <aside
        className="
          hidden
          lg:block
       bg-gray-200
       dark:bg-gray-800
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
          dark:bg-gray-950
          p-4
        "
      >
        <PlatformSelector
          selectedPlatfrom={gameQuery.platform}
          onSelectedPlatfrom={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
}

export default App;
