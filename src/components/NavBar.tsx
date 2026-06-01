import logo from "../assets/gameHublogo.webp";
import SearchInput from "./SearchInput";
import ThemeBtn from "./ThemeBtn";

function NavBar() {
  return (
    <div className="flex items-center justify-between gap-4 p-2">
      {/* LEFT */}
      <div className="flex items-center gap-3 shrink-0">
        <img src={logo} alt="GameHub Logo" className="w-28 h-14 object-cover" />
        <p className="text-xl font-bold dark:text-white">GameHub</p>
      </div>

      {/* CENTER (SEARCH) */}
      <div className="flex-1 max-w-xl">
        <SearchInput />
      </div>

      {/* RIGHT */}
      <div className="shrink-0">
        <ThemeBtn />
      </div>
    </div>
  );
}

export default NavBar;
