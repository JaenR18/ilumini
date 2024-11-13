// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./navigation/header"; //el header
import Home from "./screens/home/homeScreen"; //screen de home
import Messages from "./screens/mensajes/Messages"; //screen de mensajes
import Discover from "./screens/discover/discover"; //screen de discover
import Reserve from "./screens/acercade/acerca";

/* import theme from "./theme"; */

const App: React.FC = () => {

  return (
    <div style={{ color: "#fff" }}>
      <Router>
        <Header />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
