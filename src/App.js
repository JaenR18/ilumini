import React from "react";
import { InputE } from "./components/InputE";
export const App = () => {
  return (
    <body>
      <div>Hello</div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
        <InputE place="email" />
        <InputE place="Password" />
      </div>
    </body>
  );
};
