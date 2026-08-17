import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ThemeBtn from "./ThemeBtn";
import useGameQueryStore from "../store";

function NavBar() {
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);

  const handleLogoClick = () => {
    setSearchText("");
  };

  return (
    <nav
      className="
        w-full
        border-b
        border-gray-200
        bg-white
        px-4
        py-2
        dark:border-gray-800
        dark:bg-black
      "
    >
      <div className="flex w-full items-center gap-4">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick} className="shrink-0">
          <img
            src={logo}
            alt="GameHub Logo"
            className="
              h-14
              w-14
              object-contain
              sm:h-16
              sm:w-16
            "
          />
        </Link>

        {/* Search */}
        <SearchInput />

        {/* Theme */}
        <div className="shrink-0">
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
