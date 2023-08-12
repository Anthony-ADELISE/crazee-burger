import React from "react";
import Card from "./Card";

const MenuItem = ({ menu }) => {
  console.log(menu.title, "elllll");
  return (
    <section className="w-[240px] h-[330px] bg-white rounded-lg">
      <div>
        <img src={menu.imageSource} width={200} height={145} alt={menu.title} />
      </div>
      <div>
        <p>{menu.title}</p>
        <div>
          <span>{menu.price}</span>
          <button>Ajouter</button>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
