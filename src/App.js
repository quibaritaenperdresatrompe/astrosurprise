import { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

function App() {
  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then((response) => response.json())
      .then((data) => {
        const issPosition = [Number(data.iss_position.latitude), Number(data.iss_position.longitude)];
        const map = new Map({
          target: 'map',
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          view: new View({
            center: fromLonLat([Number(data.iss_position.longitude), Number(data.iss_position.latitude)]),
            zoom: 5,
          }),
        });
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
