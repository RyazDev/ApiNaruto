import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterPage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import CharacterInfo from './CharacterInfo'; // Importa el componente reutilizable

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://dattebayo-api.onrender.com/characters/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-page">
      <h2>{character.name}</h2>
      <ResponsiveCarousel>
        {character.images && character.images.length > 0 ? (
          character.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${character.name} image ${index + 1}`} />
            </div>
          ))
        ) : (
          <div>
            <img src={character.image} alt={`${character.name}`} />
          </div>
        )}
      </ResponsiveCarousel>
      <CharacterInfo character={character} /> {/* Reutiliza el componente aquí */}
      <button className={`favorite-btn ${isFavorite ? 'favorited' : ''}`} onClick={handleFavoriteToggle}>
        {isFavorite ? '❤️ Favorito' : '🤍 Añadir a Favoritos'}
      </button>
    </div>
  );
};

export default CharacterPage;
