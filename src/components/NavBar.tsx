import logo from "../assets/gameHublogo.webp";

function NavBar() {
  return (
    <div className="flex items-center gap-3 p-1">
      <img src={logo} alt="GameHub Logo" className="w-28 h-14 object-cover" />

      <p className="text-xl ">NavBar</p>
    </div>
  );
}

export default NavBar;
