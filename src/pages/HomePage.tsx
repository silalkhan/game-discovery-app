//This homePage is very simillar to app component..

import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreDropdown from "../components/GenreDropdown";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
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
        <GenreList />
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
          <GenreDropdown />
        </div>

        {/* Heading */}
        <GameHeading />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <PlatformSelector />

          <SortSelector />
        </div>

        {/* Games */}
        <GameGrid />
      </main>
    </div>
  );
};

export default HomePage;
//past from appcompnent now we should create route file..
