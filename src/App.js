import React, { useEffect } from 'react';
import LMap from './LMap';
import Nav from './Nav';
import Apod from './Apod';

function App() {
  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then((response) => response.json())
      .then((data) => {
        LMap(data);
      });
  });

  return (
    <div>
      <header>
        <h1>Astrosurprise 🚀</h1>
        <div
          id="map"
          style={{
            width: '100vw',
            height: '80vh',
          }}
        ></div>
      </header>
    </div>
  );
}

export default App;
