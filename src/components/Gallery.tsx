// src/components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>COLECCIÓN DE ÁLBUMES</h2>
      <div style={styles.squaresContainer}>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    padding: '0 60px',
  } as React.CSSProperties,
  title: {
    fontSize: '24px',
    marginTop: '20px',
  } as React.CSSProperties,
  squaresContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 200px)', /* Ajusta la cantidad de cuadros por fila */
    gap: '50px', 
    justifyContent: 'center', 
    marginTop: '10px',
    width: '100%',
  } as React.CSSProperties,
  square: {    
    width: '200px',
    height: '200px',
    backgroundColor: 'black',
    border: '1px solid white',
  } as React.CSSProperties,
};

export default Gallery;
