import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error page</h1>
      <button>
        <Link to="/">Retourner vers la page d'accueil</Link>
      </button>
    </div>
  );
};

export default Error;
