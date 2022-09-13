/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../api";
import UserRow2 from "../assets/UserRow2";

const DashboardPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const promise = getUsers();
    promise.then((s) => {
      setData(s);
      console.log(s);
    });
  }, []);

  return (
    <>
      <div className="h-16 bg-red-300 text-2xl text-white text-center">
        DashBoard
      </div>
      <div>
        {data.map((u) => (
          <UserRow2 key={u.id} user={u}></UserRow2>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
