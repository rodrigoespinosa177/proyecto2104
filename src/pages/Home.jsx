import * as React from 'react';
import './Home.css'
import { useState } from 'react'

function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Esto es una prueba de react</h1>
          <p className="hero-subtitle">HOLA MUNDO</p>
        </div>
      </div>

    </div>
  );
}

export default Home;