import React, { useEffect, useState } from 'react';
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

  const [issLocatorClicked, setIssLocatorClicked] = useState(true);
  const [apodClicked, setApodClicked] = useState(false);
  const apiKey = 'HMmV4kxd95z5kaMzSJg6NyYvxgtD9MayT2C3DLSa';

  return (
    <div>
      <header>
        <Nav
          issLocatorClicked={() => {
            setIssLocatorClicked(true);
            setApodClicked(false);
          }}
          apodClicked={() => {
            setApodClicked(true);
            setIssLocatorClicked(false);
          }}
        />
      </header>
      {issLocatorClicked ? (
        <div
          id="map"
          style={{
            width: '100vw',
            height: '80vh',
          }}
        ></div>
      ) : (
        <Apod apiKey={apiKey} />
      )}
    </div>
  );
}

export default App;
