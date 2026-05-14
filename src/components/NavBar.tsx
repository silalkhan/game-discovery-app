import logo from "../assets/gameHublogo.webp";
import ThemeBtn from "./ThemeBtn";

function NavBar() {
  return (
    <div className="flex items-center justify-between gap-3 p-1">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="GameHub Logo" className="w-28 h-14 object-cover" />

        <p className="text-xl font-bold dark:text-white">GameHub</p>
      </div>

      {/* Theme Toggle */}
      <ThemeBtn />
    </div>
  );
}

export default NavBar;
