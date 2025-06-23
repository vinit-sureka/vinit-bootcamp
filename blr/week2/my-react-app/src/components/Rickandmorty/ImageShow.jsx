import React from 'react';
import Image from './Image';

const ImageShow = ({ characters }) => {
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <div style={gridStyle}>
      {characters.map((char) => (
        <Image key={char.id} character={char} />
      ))}
    </div>
  );
};

export default ImageShow;
