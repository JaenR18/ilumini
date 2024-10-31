import React, { useState } from "react";
import { InputE } from "./components/InputE";
import { startLogin } from "./api/auth";

import logo from "./logo.png";
import "./styles.css";

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
            <img className="logo" src={logo}/>
          </div>
            <h3>ilumini</h3>
        </div>

        <InputE place="Correo" />
        <InputE place="Contraseña" />
        
        <div className="remenber-forgot">
          <label><input type="checkbox"/>Recordarme</label>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>      
        <button className="button" type="submit" onClick={startLogin}>Iniciar Sesion</button>
      </div>
    </>
  );
};
