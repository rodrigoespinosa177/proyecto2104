import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
      <Route path='/' element={<Home />} /> //cuando la url es /, muestra la home
      <Route path='/listas' element={<Lista />}/> 
    </Routes>
  )
}

export default App
