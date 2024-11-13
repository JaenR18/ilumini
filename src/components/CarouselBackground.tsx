// src/components/CarouselBackground.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../images/imgHome.jpg';
import Image3 from '../images/imgHome3.jpg';
import Image4 from '../images/imgHome4.jpg';

import Gallery from "../components/Gallery"

const CarouselBackground: React.FC = () => {
  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <div style={styles.carouselContainer}>
      <Slider {...carouselSettings}>
        <div>
          <img src={ Image1 } alt="Imagen 1" style={styles.carouselImage} />
        </div>
        <div>
          <img src={ Image3 } alt="Imagen 3" style={styles.carouselImage} />
        </div>
        <div>
          <img src={ Image4 } alt="Imagen 4" style={styles.carouselImage} />
        </div> 
      </Slider>      
      <Gallery />      
    </div>    
  );
};

const styles = {
  carouselContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '45%',
    zIndex: -1, 
  } as React.CSSProperties,
  carouselImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover', /* Ajusta la imagen al tamaño del contenedor */
  } as React.CSSProperties,  
};

export default CarouselBackground;


