import React from "react";
import { Link } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";

const Profile = ({ firstName }) => {
  return (
    <section className="flex items-center space-x-2 text-greyBlue font-normal">
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
    </section>
  );
};

export default Profile;
