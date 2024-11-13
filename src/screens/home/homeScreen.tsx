// src/screens/Home.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div style={style.text}>
      <h2 style={style.h2}>
        Ilumini
      </h2>
      <p>Comparte tus aventuras, inspira nuevos desafios</p>      
    </div>
  );
};

const style = {  
  text: {
    padding: '0 40px',        
  }as React.CSSProperties,
  h2: {
    fontFamily: 'kronaOne-Regular',
    fontSize: '40px',
  } as React.CSSProperties,  
};

export default Home;
