import React from "react";
import RightSideNavbar from "../components/navbar/RightSideNavbar";
import handleLogoClick from "../utils/reload";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-white w-full rounded-t-2xl font-openSans drop-shadow-2xl">
      <ul className="flex items-center justify-between py-5 pl-5 pr-16">
        <li>
          <button onClick={handleLogoClick}>
            <Logo styleImg={"w-[80px]"} />
          </button>
        </li>
        <RightSideNavbar />
      </ul>
    </nav>
  );
};

export default Navbar;
