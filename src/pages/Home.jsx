import * as React from 'react';
import './Home.css'
import { useState } from 'react'

function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Esto es una prueba de react para renderizar, utilizamos listas de personas y listas de tareas, mediante una condicion</h1>
          <br />
          <p className="hero-subtitle">HOLA MUNDO</p>
        </div>
      </div>

    </div>
  );
}

export default Home;