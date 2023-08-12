import React, { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <div>
      {menu.map((elMenu) => {
        return <MenuItem key={elMenu.id} menu={elMenu} />;
      })}
    </div>
  );
};

export default Menu;
