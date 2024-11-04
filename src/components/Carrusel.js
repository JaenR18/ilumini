import React, { useState, useEffect } from 'react';
import './index.css'
const Carrusel = ({ items, intervalo = 3000 }) => {
  const [indexActual, setIndexActual] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexActual((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalo);

    return () => clearInterval(intervalId);
  }, [items.length, intervalo]);

  return (
    <div className="carrusel">
      {items.map((item, index) => (
        <div
          key={index}
          style={{ display: index === indexActual ? 'block' : 'none' }}
          className="carrusel-item"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Carrusel;
