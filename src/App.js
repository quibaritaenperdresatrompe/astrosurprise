import React, { useEffect } from 'react';
import LMap from './LMap';

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
            width: '400px',
            height: '250px',
          }}
        ></div>
      </header>
    </div>
  );
}

export default App;
