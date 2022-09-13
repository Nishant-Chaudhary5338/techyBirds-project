/** @format */

import React from "react";
import Table from "react-bootstrap/Table";

const UserRow = ({ user }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name.first}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.location.city}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserRow;
