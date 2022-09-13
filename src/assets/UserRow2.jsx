/** @format */

import React from "react";

const UserRow2 = ({ user }) => {
  return (
    <div className="bg-gray-100 m-2">
      <div>
        {" "}
        <span>First Name:</span> {user.name.first}
      </div>
      <div>
        {" "}
        <span>Gender:</span>
        {user.gender}
      </div>
      <div>
        {" "}
        <span>Email:</span>
        {user.email}
      </div>
      <div>
        {" "}
        <span>City:</span>
        {user.location.city}
      </div>
    </div>
  );
};

export default UserRow2;
