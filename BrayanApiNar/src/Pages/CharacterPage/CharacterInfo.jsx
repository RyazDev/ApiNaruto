// CharacterInfo.jsx
import React from 'react';
import '../../Componests/CharacterCard/CharacterCard.css'; 

const CharacterInfo = ({ character }) => {
  const personalData = character.personal ? Object.entries(character.personal).slice(0, 2) : [];
  const familyData = character.family ? Object.entries(character.family).slice(0, 2) : [];
  const jutsuData = character.jutsu ? character.jutsu.slice(0, 5) : [];
  const natureType = character.natureType || []; 

  return (
    <div className="character-info">

      <div className="info-section">
        <p><strong>Datos:</strong></p>
        <ul>
          {personalData.length > 0 ? (
            personalData.map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))
          ) : (
            <li>No disponible</li>
          )}
        </ul>
      </div>

      <div className="info-section">
        <p><strong>Familia:</strong></p>
        <ul>
          {familyData.length > 0 ? (
            familyData.map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))
          ) : (
            <li>No disponible</li>
          )}
        </ul>
      </div>

      
      <div className="info-section">
        <p><strong>Tipos de Naturaleza:</strong></p>
        <ul>
          {natureType.length > 0 ? (
            natureType.map((type, index) => (
              <li key={index}>{type}</li>
            ))
          ) : (
            <li>No disponible</li>
          )}
        </ul>
      </div>

      <div className="info-section">
        <p><strong>Jutsu:</strong></p>
        <ul>
          {jutsuData.length > 0 ? (
            jutsuData.map((jutsu, index) => (
              <li key={index}>{jutsu}</li>
            ))
          ) : (
            <li>No disponible</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CharacterInfo;
