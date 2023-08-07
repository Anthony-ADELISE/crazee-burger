import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    navigate("/order");
    setFirstName("");
  };

  return (
    <section>
      {/* div titre + sous titre */}
      <div>
        <h1>Bienvenue chez nous</h1>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">Prénom</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="entrez votre prénom"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </section>
  );
};

export default LoginForm;
