/** @format */

import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button className="bg-green-500 rounded-md px-6 py-2" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
