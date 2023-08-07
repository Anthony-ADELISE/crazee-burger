import React from "react";
import { Link, useParams } from "react-router-dom";

const Order = () => {
  const { firstName } = useParams();
  console.log(firstName);
  return (
    <div>
      <h1>Bonjour {firstName}</h1>
      <button>
        <Link to="/">Déconnexion</Link>
      </button>
    </div>
  );
};

export default Order;
