// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import CharacterCard from '../../Componests/CharacterCard/CharacterCard'; 
import './HomePage.css';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json();
        
        console.log(data.characters); 

        setCharacters(data.characters); 
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCharacters();
  }, []);

  return (
    <div className="home-page">
      <h2>Personajes de Naruto</h2>
      <div className="character-grid">
        {loading ? (
          <p>Cargando personajes...</p>
        ) : (
          characters.length > 0 ? (
            characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          ) : (
            <p>No se encontraron personajes.</p>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
