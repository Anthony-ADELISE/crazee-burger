import React, { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import MenuItem from "./MenuItem";
import { formatPrice } from "../../../utils/maths";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <div className="flex justify-center px-10  gap-x-20 items-center flex-wrap  gap-y-16 py-12 ">
      {menu.map(({ title, imageSource, price, id }) => {
        return (
          <MenuItem
            key={id}
            title={title}
            imageSource={imageSource}
            priceDescription={formatPrice(price)}
          />
        );
      })}
    </div>
  );
};

export default Menu;
