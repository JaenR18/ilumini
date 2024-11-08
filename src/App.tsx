// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './navigation/header';
import Home from './screens/home/homeScreen';
import Messages from './screens/mensajes/Messages';

const App: React.FC = () => {
  
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<div>Descubre</div>} />
          <Route path="/reserve" element={<div>Reserva</div>} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
