import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[200px_1fr] grid-rows-[auto_1fr]">
      {/* Navbar */}
      <nav className=" p-4 lg:col-span-2">
        <NavBar />
      </nav>

      {/* Sidebar */}
      <aside className="hidden lg:block bg-gray-300 p-4">Aside</aside>

      {/* Main Content */}
      <main className="bg-green-300 p-4">Main</main>
    </div>
  );
}

export default App;
