/**For react-routing we have create pages where we add multpile pages for application we wanna separate these pages for our components
 * first we need layout.tsx this is where specified that all pages should have navigation bar on the top.
 *
 */

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div
      className=" bg-white
        text-black
        dark:bg-black
        dark:text-white
        transition-colors
        duration-300"
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
