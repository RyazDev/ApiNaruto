// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Componests/Header/Header'; 
import Footer from './Componests/Footer/Footer';
import Home from './Pages/HomePage/HomePage';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/character/:id" element={<CharacterPage />} /> 
            <Route path="/about" element={<AboutPage />} /> 
          
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

