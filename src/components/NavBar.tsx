import { Link } from "react-router-dom";
import logo from "../assets/gameHublogo.webp";
import SearchInput from "./SearchInput";
import ThemeBtn from "./ThemeBtn";

// interface Props {
//   onSearch: (searchText: string) => void;
// }
// function NavBar({ onSearch }: Props) {
//   return (
//     <div className="flex items-center gap-3 w-full">
//       <img
//         src={logo}
//         alt="GameHub Logo"
//         className="w-16 h-16 md:w-24 md:h-24 object-contain shrink-0"
//       />

//       <SearchInput onSearch={onSearch} />

//       <ThemeBtn />
//     </div>
//   );
// }

// export default NavBar;

//Managing state by using zustand.... so removing props

function NavBar() {
  return (
    <div className="flex items-center gap-3 w-full">
      <Link to="/">
        <img
          src={logo}
          alt="GameHub Logo"
          className="w-16 h-16 md:w-24 md:h-24 object-contain shrink-0"
        />
      </Link>

      <SearchInput />

      <ThemeBtn />
    </div>
  );
}

export default NavBar;
