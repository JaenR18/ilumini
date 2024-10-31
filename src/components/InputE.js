import React from "react";

export const InputE = ({ place, value, onChange}) => {

  return (
    <>
      <input
        placeholder={place}
        value={value} 
        onChange={onChange}
        style={{
          width: 230,
          height: 40,
          backgroundColor: "black",
          color: "white",
          borderRadius: 8, 
          borderWidth: 1,
          padding: "0px 70px 0px 10px"
        }}
      />
    </>
  );
};
