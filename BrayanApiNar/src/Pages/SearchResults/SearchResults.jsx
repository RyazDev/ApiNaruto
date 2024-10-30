// src/pages/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const [characters, setCharacters] = useState([]);
    const query = new URLSearchParams(useLocation().search).get('query');

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`https://dattebayo-api.onrender.com/characters?name=${query}`);
                const data = await response.json();
                setCharacters(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchCharacters();
    }, [query]);

    return (
        <div>
            <h2>Resultados de Búsqueda para: {query}</h2>
            <div>
                {characters.length > 0 ? (
                    characters.map((character) => (
                        <div key={character.id}>{character.name}</div>
                    ))
                ) : (
                    <p>No se encontraron personajes.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
