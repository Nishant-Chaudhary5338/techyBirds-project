/** @format */

import React from "react";

const Input = ({ id, value, onChange, type }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-semibold" htmlFor={id}>
        {id}
      </label>
      <input
        className="px-10 py-2 sm:w-60 rounded-md bg-gray-50"
        type={type}
        onChange={onChange}
        id={id}
        value={value}
      />
    </div>
  );
};

export default Input;
