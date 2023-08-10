import React from "react";
import { useParams } from "react-router-dom";
import MainOrder from "../components/order/MainOrder";
import Navbar from "../reusable-ui/Navbar";

const Order = () => {
  const { firstName } = useParams();

  return (
    <section className="h-screen bg-primary_burger w-full ">
      <div className="flex flex-col h-full py-10 max-w-[1400px] mx-auto">
        <Navbar firstName={firstName} />
        <MainOrder />
      </div>
    </section>
  );
};

export default Order;
