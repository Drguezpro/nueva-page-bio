import React, { useState, useEffect } from 'react';
import logo from '../assets/AndreaBlanginoLogoBco.svg';
import EneroBio1 from '../assets/EneroBio1.png';
import EneroBio2 from '../assets/EneroBio2.png';
import EneroBio3 from '../assets/EneroBio3.png';
import './App.css';

const images = [EneroBio1, EneroBio2, EneroBio3];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="logo-container">
        <img
          src={logo}
          alt="Andrea Blangino Logo"
          className="logo"
          style={{ width: '400px', height: 'auto' }} // Ajusta el tamaño del logo
        />
      </div>
      <div className="bento-container">
        <div className="grid-item large">
          <img src={images[currentImageIndex]} alt="Enero Bio" className="grid-image" />
        </div>
        <div className="grid-item">
          <img src={images[(currentImageIndex + 1) % images.length]} alt="Enero Bio" className="grid-image" />
        </div>
        <div className="grid-item">
          <img src={images[(currentImageIndex + 2) % images.length]} alt="Enero Bio" className="grid-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
