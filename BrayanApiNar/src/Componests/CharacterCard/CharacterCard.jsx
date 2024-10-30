import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterInfo from '../../Pages/CharacterPage/CharacterInfo'; // Importa el componente reutilizable
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/character/${character.id}`);
  };

  const characterImage = character.images && character.images.length > 0 
    ? character.images[0] 
    : 'default-image-url.jpg';

  return (
    <div className="character-card">
      <img src={characterImage} alt={character.name} className="character-image" />
      <CharacterInfo character={character} />
      <button onClick={handleDetailsClick}>Ver Detalles</button>
    </div>
  );
};

export default CharacterCard;
