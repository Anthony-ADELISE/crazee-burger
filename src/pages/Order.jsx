import React from "react";
import { Link, useParams } from "react-router-dom";

const Order = () => {
  const { firstName } = useParams();

  return (
    <section className="h-screen bg-primary_burger w-full ">
      <div className="flex flex-col h-full py-10 max-w-[1400px] mx-auto">
        <nav className="bg-green rounded-t-lg">
          <h1>Bonjour {firstName}</h1>
          <button>
            <Link to="/">Déconnexion</Link>
          </button>
        </nav>
        <main className="bg-red flex-1 rounded-b-lg">OK</main>
      </div>
    </section>
  );
};

export default Order;
