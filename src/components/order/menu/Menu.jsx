import React, { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <div className="flex items-center flex-wrap justify-center gap-x-[85px] gap-y-[60px] py-12 bg-pink-500">
      {menu.map((elMenu) => {
        return <MenuItem key={elMenu.id} menu={elMenu} />;
      })}
    </div>
  );
};

export default Menu;
