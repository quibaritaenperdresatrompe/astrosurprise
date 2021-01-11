import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

function LMap(data) {
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
}

export default LMap;
