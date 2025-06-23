import React from 'react';

const Image = ({ character }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '16px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <img src={character.image} alt={character.name} style={imageStyle} />
      <p>{character.name}</p>
    </div>
  );
};

export default Image;
