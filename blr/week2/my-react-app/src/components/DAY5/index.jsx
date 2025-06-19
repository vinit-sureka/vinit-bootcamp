import React, { useState } from "react";
import Day5SearchBar from "./Day5SearchBar";
import Day5Image from "./Day5Image";
import searchImages from '../../api'


export default function Day5() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log("res", result);

    setImages(result);
  };

  return (
    <div>
      <Day5SearchBar onSubmit={handleSubmit} />
      <Day5Image images={images} />
    </div>
  );
}
