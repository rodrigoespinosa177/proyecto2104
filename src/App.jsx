import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Tarea from "./pages/Tarea";
import Login from "./pages/Login";      
import Carrito from "./pages/Carrito";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Cuando la url es /, muestra la
      home */}
      <Route path="/listas" element={<Lista />} />
      <Route path="/tarea" element={<Tarea />} />
      <Route path="/login" element={<Login />} />      
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
  );
}

export default App;
