import React, { useState } from "react";
import ToggleButton from "../../reusable-ui/ToggleButton";
import Profile from "./Profile";

const RightSideNavbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section className="flex items-center gap-x-12">
      <ToggleButton onToggle={handleToggle} isChecked={isChecked} />
      <Profile />
    </section>
  );
};

export default RightSideNavbar;
