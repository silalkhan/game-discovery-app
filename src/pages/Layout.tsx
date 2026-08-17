import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-black
        transition-colors
        duration-300
        dark:bg-black
        dark:text-white
      "
    >
      {/* Navigation */}
      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-gray-200
          bg-white/95
          backdrop-blur
          dark:border-gray-800
          dark:bg-black/95
        "
      >
        <NavBar />
      </header>

      {/* Page Content */}
      <Outlet />
    </div>
  );
};

export default Layout;
