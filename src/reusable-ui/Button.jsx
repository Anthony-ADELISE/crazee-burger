import React from "react";

const Button = ({ type = "", className = "", onClick, title }) => {
  return (
    <div className={` ${className}`} type={type} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
