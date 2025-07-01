import React from "react";

const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-400 hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
