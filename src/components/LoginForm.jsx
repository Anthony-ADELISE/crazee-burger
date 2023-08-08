import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../reusable-ui/Button";

import { PiUserCircleFill } from "react-icons/pi";
import { BsChevronRight } from "react-icons/bs";

const LoginForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    navigate(`order/${firstName}`);
    setFirstName("");
  };

  return (
    <section>
      {/* div titre */}
      <div className="text-white font-bold text-5xl font-amaticSC border-b-2 text-center w-[400px] pb-8 border-[#F56A2C]">
        <h1>Bienvenue chez nous !</h1>
      </div>
      <form onSubmit={onSubmit}>
        <h2 className="text-white font-bold text-4xl font-amaticSC text-center pt-10">
          Connectez vous
        </h2>
        <div className="  relative">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Entrez votre prénom"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="inputForm"
          />
          <div className="absolute text-greyBlue top-11 left-0 pl-6 flex items-center pointer-events-none">
            <PiUserCircleFill />
          </div>
        </div>
        <div className="bg-primary_burger font-bold  font-openSans justify-center space-x-3  text-white py-5 mt-5 rounded-md flex items-center">
          <Button
            className=" ursor-pointer"
            title="Accéder à mon espace"
            type="submit"
          />
          <BsChevronRight />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
