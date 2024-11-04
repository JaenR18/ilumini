// App.js
import React from "react";
import MapComponent from "./components/MapComponent";
import 'leaflet/dist/leaflet.css';

export const App = () => {
  return (
    <div className="App">
      <h1>Mapa Interactivo con Leaflet en React</h1>
      <MapComponent />
    </div>
  );
};
