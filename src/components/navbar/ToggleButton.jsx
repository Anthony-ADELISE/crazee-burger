import React from "react";

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "DÉSACTIVÉ LE MODE ADMIN",
  labelIfUnchecked = "ACTIVÉ LE MODE ADMIN",
}) {
  return (
    <div className="flex items-center space-x-2 ">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={onToggle}
        />
        <div className="w-[200px] peer-checked:border-2 peer-checked:border-primary_burger h-10 bg-black   rounded-full peer  peer-checked:after:translate-x-[160px] peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-primary  after:rounded-full after:h-8 after:w-8 after:transition-all  peer-checked:bg-white"></div>
        <span
          className={
            isChecked
              ? " absolute left-0 ml-3 pt-0.5 font-bold  text-[10px] text-dark font-openSans transition-all duration-300"
              : "absolute left-0 ml-12 pt-0.5 text-[10px] text-primary text-center font-bold font-openSans transition-all duration-300"
          }
        >
          {isChecked ? labelIfChecked : labelIfUnchecked}
        </span>
      </label>
    </div>
  );
}
