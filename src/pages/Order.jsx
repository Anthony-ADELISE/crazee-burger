import React from "react";
import { useParams } from "react-router-dom";
import MainOrder from "../components/order/MainOrder";
import Navbar from "../reusable-ui/Navbar";

const Order = () => {
  const { firstName } = useParams();

  return (
    <section className="h-screen flex justify-center items-center bg-primary_burger w-full">
      <div className="flex h-5/6 w-full justify-center flex-col max-w-[1400px]">
        <Navbar firstName={firstName} />
        <MainOrder />
      </div>
    </section>
  );
};

export default Order;
