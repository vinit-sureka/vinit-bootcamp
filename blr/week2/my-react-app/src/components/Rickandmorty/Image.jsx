import React from 'react';
import Button from './Button'; // Import the Button component

const Image = ({ character, onButtonClick }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '16px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
    width: '180px',
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
      {/* <Button onClick={() => onButtonClick(character)}>
        View Details
      </Button> */}

      <Button text='View' type='view'/>
    </div>
  );
};

export default Image;
