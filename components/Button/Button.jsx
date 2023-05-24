import React from "react";

import Style from "./Button.module.css";

const Button = ({ icon, classStyle, btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button
        className={`${Style.button} ${classStyle}`}
        onClick={() => handleClick()}
      >
        {icon}  {btnName}
      </button>
    </div>
  );
};

export default Button;
