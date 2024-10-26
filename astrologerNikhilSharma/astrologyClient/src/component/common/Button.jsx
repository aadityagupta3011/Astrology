import React from "react";

const Button = ({ label, color, onClick }) => {
  return (
    <button
      className={`${color} hover:brightness-100 text-white font-bold py-2 px-4 rounded shadow-md m-2`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
