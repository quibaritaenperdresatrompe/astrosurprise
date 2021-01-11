import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Point from 'ol/geom/Point';

function LMap(data) {
  let issPosition = [Number(data.iss_position.latitude), Number(data.iss_position.longitude)];

  let issPoint = new Feature({
    geometry: new Point(fromLonLat([12.5, 41.9])),
  });
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
