import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap as Map} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fijar la URL de los íconos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const CurrentLocationMarker = ({ position }) => {
  const map = Map();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }, [position, map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        Tu ubicación actual.
      </Popup>
    </Marker>
  );
};

const MapComponent = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    const handleLocation = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition([latitude, longitude]);
    };

    const handleError = () => {
      console.error('No se pudo obtener la ubicación del usuario.');
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation, handleError);
    }
  }, []);

  const goToCurrentLocation = () => {
    if (currentPosition) {
      const map = useMap();
      map.flyTo(currentPosition, 13); // Cambia el zoom según sea necesario
    }
  };

  return (
    <div>
      <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CurrentLocationMarker position={currentPosition} />
      </MapContainer>
      <button 
        onClick={goToCurrentLocation} 
        style={{ position: 'absolute', zIndex: 1000, backgroundColor: 'white', border: '1px solid black', padding: '5px' }}>
        Ir a mi ubicación
      </button>
    </div>
  );
};

export default MapComponent;
