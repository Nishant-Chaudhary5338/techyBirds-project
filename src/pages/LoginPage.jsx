/** @format */

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../assets/Button";
import Input from "../assets/Input";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    localStorage.setItem("UserEmail", "email");
    localStorage.setItem("UserPassword", "password");
    console.log(email, password);
    navigate("/dashboard");
  };
  return (
    <>
      <div className=" space-y-8 mx-10 md:mx-40 my-20 bg-blue-100">
        <h1 className="text-center text-4xl text-blue-400">Techy Birds</h1>
        <div className="justify-center flex">
          <form onSubmit={handleSubmit}>
            <Input
              id="Email"
              value={email}
              onChange={handleEmailChange}
              type="email"
            >
              Email
            </Input>
            <Input
              id="Password"
              value={password}
              onChange={handlePasswordChange}
              type="password"
            >
              Password
            </Input>
            <Button>Login</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
