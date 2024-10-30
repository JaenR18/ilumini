import React from "react";
import { InputE } from "./components/InputE";
import "./App.css"; 

export const App = () => {
  return (
    <div className="app-container">
      <div className="input">    
        <h2 className="title">ilimini</h2>
        <InputE place="Email" />
        <InputE place="Password" />
      </div>
    </div>
  );
};
