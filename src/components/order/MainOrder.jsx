import React from "react";
import Menu from "./menu/Menu";

const MainOrder = () => {
  return (
    <main className="w-full bg-background_white flex-1 rounded-b-lg flex">
      <div className="bg-red w-1/4">Basket</div>
      <div className="bg-blue w-full">
        <Menu />
      </div>
    </main>
  );
};

export default MainOrder;
