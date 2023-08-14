import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Profile from "./Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RightSideNavbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <section className="flex items-center gap-x-12">
        <ToggleButton onToggle={handleToggle} isChecked={isChecked} />
        <Profile />
        <ToastContainer />
      </section>
    </>
  );
};

export default RightSideNavbar;
