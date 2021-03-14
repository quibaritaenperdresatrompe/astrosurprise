import LMap from './LMap';
import React, { useEffect } from 'react';

function Issloc(props) {
  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then((response) => response.json())
      .then((data) => {
        LMap(data);
      });
  });

  return (
    <div
      className=""
      id="map"
      style={{
        width: '100vw',
        height: '80vh',
      }}
    ></div>
  );
}

export default Issloc;
