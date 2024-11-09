/* configuraciones del HomePage de Kelly */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './navigation/header';//el header
import Home from './screens/home/homeScreen';//screen de home 
import Messages from './screens/mensajes/Messages';//screen de mensajes
import Discover from './screens/discover/discover';//screen de discover
import Reserve from './screens/reserve/reserve'; //screen de reserva


export const Navbar: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve/>} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </div>
  );
}; 