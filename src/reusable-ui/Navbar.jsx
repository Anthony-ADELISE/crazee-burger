import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ firstName }) => {
  return (
    <nav className="bg-green rounded-t-lg">
      <h1>Bonjour {firstName}</h1>
      <button>
        <Link to="/">Déconnexion</Link>
      </button>
    </nav>
  );
};

export default Navbar;
