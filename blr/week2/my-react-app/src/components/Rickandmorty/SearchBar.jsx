import React, { useState } from "react";
import Button from "./Button";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    onSearch(input);
  };

  const searchBarStyle = {
    textAlign: "center",
    marginBottom: "30px",
  };

  const inputStyle = {
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px", // spacing between buttons
    marginTop: "15px",
  };

  return (
    <div style={searchBarStyle}>
      <label>Please enter a character name!</label>
      <br />
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="name of character"
        style={inputStyle}
      />
      <div style={buttonGroupStyle}>
        <Button text="Back" type="danger" />
        <Button text="Search" type="search" onClick={handleClick} />
        <Button text="Next" type="success" />
      </div>
    </div>
  );
};

export default SearchBar;
