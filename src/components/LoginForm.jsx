import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    alert(`Bonjour ${firstName}`);

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
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </section>
  );
};

export default LoginForm;
