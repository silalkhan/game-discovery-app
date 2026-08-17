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
        bg-gray-100
        text-gray-900
        dark:bg-black
        dark:text-white
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
        {/* Desktop Sidebar */}
        <aside
          className="
            hidden
            border-r
            border-gray-200
            bg-gray-100
            p-5
            lg:block
            dark:border-gray-800
            dark:bg-black
          "
        >
          <GenreList />
        </aside>

        {/* Main Content */}
        <main
          className="
            min-w-0
            px-4
            py-6
            sm:px-6
            lg:px-8
          "
        >
          {/* Mobile Genre Dropdown */}
          <div className="mb-5 lg:hidden">
            <GenreDropdown />
          </div>

          {/* Heading */}
          <GameHeading />

          {/* Filters */}
          <div
            className="
              mb-6
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <PlatformSelector />
            <SortSelector />
          </div>

          {/* Games */}
          <GameGrid />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
