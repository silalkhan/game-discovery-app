import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
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
        Aside
      </aside>

      {/* Main Content */}
      <main
        className="
          bg-gray-100
          dark:bg-gray-950
          p-4
        "
      >
        <GameGrid />
      </main>
    </div>
  );
}

export default App;
