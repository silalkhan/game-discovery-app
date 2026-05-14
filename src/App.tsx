function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[200px_1fr] grid-rows-[auto_1fr]">
      {/* Navbar */}
      <nav className="bg-orange-400 p-4 lg:col-span-2">Nav</nav>

      {/* Sidebar */}
      <aside className="hidden lg:block bg-gray-300 p-4">Aside</aside>

      {/* Main Content */}
      <main className="bg-green-300 p-4">Main</main>
    </div>
  );
}

export default App;
