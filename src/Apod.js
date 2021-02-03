import React, { useEffect } from 'react';

const Apod = ({ apiKey }) => {
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h1>Nada For Now</h1>
    </div>
  );
};

export default Apod;
