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
          borderWidth: 1
        }}
      />
    </>
  );
};
