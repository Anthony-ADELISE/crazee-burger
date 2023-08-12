import React from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = ({ firstName }) => {
  const handleLogoClick = () => {
    window.location.reload(); // Recharge la page
  };
  return (
    <nav className="bg-white w-full rounded-t-2xl font-openSans drop-shadow-2xl">
      <ul className="flex items-center justify-between py-5 pl-5 pr-16">
        <li>
          <button onClick={handleLogoClick}>
            <Logo styleImg={"w-[80px]"} />
          </button>
        </li>
        <li className="flex items-center space-x-2 text-greyBlue font-normal">
          <div>
            <h4 className="leading-none">
              Hey, <span className="text-primary"> {firstName}</span>
            </h4>
            <button>
              <Link
                to="/"
                className="text-[10px] hover:underline hover:underline-offset-1"
              >
                Se deconnecter
              </Link>
            </button>
          </div>
          <PiUserCircleFill
            width={36}
            height={36}
            className="text-4xl text-greyBlue"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
