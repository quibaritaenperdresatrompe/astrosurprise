import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then((response) => response.json())
      .then((data) => {
        const issPosition = data.iss_position;
        console.log(issPosition);

        const geojson = { center: `${issPosition.latitude},${issPosition.longitude}` };

        fetch(`http://osm-static-maps.herokuapp.com?`, {
          mode: 'no-cors',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      });
  });

  return (
    <div>
      <header>
        <h1>Astrosurprise 🚀</h1>
      </header>
    </div>
  );
}

export default App;
