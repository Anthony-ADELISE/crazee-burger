import { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../fakeData/fakeMenu";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);
  return <div>Menu</div>;
};

export default Menu;
