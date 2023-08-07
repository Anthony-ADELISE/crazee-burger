import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error page</h1>
      <button>
        <Link to="/">Retourner page d'acceuil</Link>
      </button>
    </div>
  );
};

export default Error;
