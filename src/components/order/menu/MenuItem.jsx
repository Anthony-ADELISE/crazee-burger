import React from "react";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

const MenuItem = ({ title, priceDescription, imageSource }) => {
  return (
    <section className="w-[240px] pt-12 px-5 pb-5 shadow-lg shadow-gray-500 bg-white rounded-2xl ">
      <div className="w-full h-[145px]">
        <img
          className="w-full h-full object-contain"
          src={imageSource}
          width={200}
          height={145}
          alt={title}
        />
      </div>
      <div className="mt-4">
        <p className="text-4xl font-amaticSC font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
          {title}
        </p>
        <div className="flex justify-between font-openSans pt-4 items-center">
          <span className=" text-primary ">{priceDescription}</span>
          <PrimaryButton
            label="Ajouter"
            className="bg-primary text-white py-3 px-7 rounded-md max-w-[105px] font-bold"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
