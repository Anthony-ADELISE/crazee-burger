import React from "react";

const Input = ({
  value,
  handleChange,
  placeholder,
  iconInput,
  classNameIcon = "",
  className = "",
  ...restProps
}) => {
  return (
    <section className="relative">
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...restProps}
        className={`${className}`}
      />
      <div className={`${classNameIcon}`}>{iconInput && iconInput}</div>
    </section>
  );
};

export default Input;
