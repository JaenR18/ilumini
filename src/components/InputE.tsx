import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputEProps {
  place: string;
  register: UseFormRegisterReturn;
  type?: string;
}

export const InputE: React.FC<InputEProps> = ({ place, register, type = "text" }) => {
  return (
    <input
      placeholder={place}
      {...register}
      type={type}
      style={{
        width: "100%",
        height: 40,
        backgroundColor: "black",
        color: "white",
        borderRadius: 8,
        border: "1px solid white",
        marginBottom: 10,
      }}
    />
  );
};
