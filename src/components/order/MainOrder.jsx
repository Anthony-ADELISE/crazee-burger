import React from "react";
import Menu from "./menu/Menu";

const MainOrder = () => {
  return (
    <main className="w-full h-full bg-background_white flex rounded-b-lg">
      <div className="w-1/4 bg-blue hidden">Basket</div>
      <div className="w-full overflow-y-scroll">
        <Menu />
      </div>
    </main>
  );
};

export default MainOrder;
