// src/pages/AboutPage.js
import React from 'react';
import './AboutPage.css';
import narutoGif from '../../assets/Nar.gif'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>Acerca de Esta Aplicacion</h2>
      <img src={narutoGif} alt="Naruto" className="about-image" />
      <p>Esta es una aplicación dedicada a los personajes de la serie "Naruto".</p>
      <p>Utiliza la API de Dattebayo para obtener información sobre los personajes.</p>
    </div>
  );
};

export default AboutPage;

