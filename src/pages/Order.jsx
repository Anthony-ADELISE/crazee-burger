import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <h1>Bonjour Bob</h1>
      <button>
        <Link to="/">Retourner page d'acceuil</Link>
      </button>
    </div>
  );
};

export default Order;
