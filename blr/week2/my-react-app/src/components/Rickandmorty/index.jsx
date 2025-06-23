import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageShow from './ImageShow';
import { fetchCharactersByName } from './api';

const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([]);

  const handleSearch = async (name) => {
    const data = await fetchCharactersByName(name);
    setCharacters(data);
  };

  // App-level styles
  const appStyle = {
    backgroundColor: '#e3f2fd', // light blue background
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <SearchBar onSearch={handleSearch} />
      <ImageShow characters={characters} />
    </div>
  );
};

export default RickAndMortyApp;
