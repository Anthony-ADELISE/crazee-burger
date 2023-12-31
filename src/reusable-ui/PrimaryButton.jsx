import React from "react";

const PrimaryButton = ({
  className = "",
  onClick,
  label,
  icon,
  ...restProps
}) => {
  return (
    <button
      onClick={onClick}
      className={`primaryButtonStyle ${className}`}
      {...restProps}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default PrimaryButton;
