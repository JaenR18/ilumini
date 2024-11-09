import React from "react";
/* configuraciones del login */
import { InputE } from "./components/InputE";
import { startLogin } from "./api/auth";
import { CardComponent } from "./components/Card";
import logo from "./assets/image/logo.png";
import { GoogleIcon } from "./assets/icon/GoogloIcon";
import "./styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

export const App = () => {  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { email, password } = data;
    console.log(data);
    startLogin(email, password);
  };

  return (
    <div className="container">
      <div className="container-header">
        <div className="color">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <h3>ilumini</h3>
      </div>
      <p>Donde cada conexión enciende nuevas oportunidades.</p>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
        <InputE
          place="Correo"
          register={register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "El correo no es válido",
            },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
        <InputE
          place="Contraseña"
          register={register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "La contraseña debe contener letras y números",
            },
          })}
          type="password"
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Recordarme
          </label>
          <a href="contra">¿Olvidaste tu contraseña?</a>
        </div>

        <button className="button" type="submit">
          Iniciar Sesión
        </button>

        <div className="separator">o</div>

        <button
          className="google-button"
          type="button"
          style={{ display: "flex" }}
        >
          <GoogleIcon height="15" />
          Continuar con Google
        </button>
      </form>
    </div>
  );
};
