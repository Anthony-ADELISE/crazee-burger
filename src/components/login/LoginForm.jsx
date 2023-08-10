import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PiUserCircleFill } from "react-icons/pi";
import { BsChevronRight } from "react-icons/bs";
import Input from "../../reusable-ui/Input";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

const LoginForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    navigate(`order/${inputValue}`);
    setInputValue("");
  };

  return (
    <section className="max-w-sm w-full">
      {/* div titre */}
      <div className="text-white font-bold text-5xl font-amaticSC border-b-2 text-center  pb-8 border-[#F56A2C]">
        <h1>Bienvenue chez nous !</h1>
      </div>
      <form action="submit" onSubmit={onSubmit}>
        <h2 className="text-white font-bold text-4xl font-amaticSC text-center pt-10">
          Connectez vous
        </h2>
        <Input
          name="firstName"
          id="firstName"
          handleChange={handleChange}
          value={inputValue}
          placeholder="Entrez votre prénom"
          type={"text"}
          required
          className="inputForm"
          classNameIcon="iconStyle"
          iconInput={<PiUserCircleFill />}
        />
        <PrimaryButton
          label={"Accéder à mon compte"}
          icon={<BsChevronRight />}
          type="submit"
        />
      </form>
    </section>
  );
};

export default LoginForm;
