import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleClick = () => {
    onSearch(input);
  };

  // Style the container
  const searchBarStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const inputStyle = {
    padding: '10px',
    width: '250px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  return (
    <div style={searchBarStyle}>
      <label>Please enter a character to view images!</label>
      <br /><br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search character"
        style={inputStyle}
      />
      <br /><br />
      <button onClick={handleClick} style={buttonStyle}>Search</button>
    </div>
  );
};

export default SearchBar;
