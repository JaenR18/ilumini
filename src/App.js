import React, { useState } from "react";
import { InputE } from "./components/InputE";
import "./styles.css";
import logo from "./logo.png";
import { startLogin } from "./api/auth";

export const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <div className="container">
        <div className="container-header">
          <div className="color">
            <img src={logo} className="logo"/>
          </div>
            <h3>ilumini</h3>
        </div>

        <InputE place="Email" />
        <InputE place="Password" />

        <button type="submit" onClick={startLogin}>Login</button>
      </div>

    </>
  );
};
