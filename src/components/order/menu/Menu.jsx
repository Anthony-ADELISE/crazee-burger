import React, { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <div className="flex justify-center px-10  gap-x-20 items-center flex-wrap  gap-y-16 py-12 ">
      {menu.map((item) => {
        return (
          <MenuItem
            key={item.id}
            title={item.title}
            imageSource={item.imageSource}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Menu;
