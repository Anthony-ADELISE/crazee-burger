import React from "react";

const MenuItem = ({ title, price, imageSource }) => {
  return (
    <section className="w-[240px] h-[330px] bg-white rounded-lg flex flex-col items-center justify-center">
      <div className="w-24">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          width={200}
          height={145}
          alt={title}
        />
      </div>
      <div>
        <p>{title}</p>
        <div>
          <span>{price}</span>
          <button>Ajouter</button>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
