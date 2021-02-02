import 'ol/ol.css';
import { Map, View } from 'ol';
import Feature from 'ol/Feature';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Point from 'ol/geom/Point';

import VectorSource from 'ol/source/Vector';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import CircleStyle from 'ol/style/Circle';

import Style from 'ol/style/Style';
import Circle from 'ol/geom/Circle';

function LMap(data) {
  let issPosition = [Number(data.iss_position.longitude), Number(data.iss_position.latitude)];
  console.log(issPosition);

  let issFeature = new Feature({
    geometry: new Circle(fromLonLat(issPosition), 100000),
  });

  console.log(issFeature);

  var vectorSource = new VectorSource({
    features: [issFeature],
  });

  var vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  var mapLayer = new TileLayer({ source: new OSM() });

  console.log(vectorLayer);
  //eslint-disable-next-line
  const map = new Map({
    target: 'map',
    layers: [mapLayer, vectorLayer],
    view: new View({
      center: fromLonLat(issPosition),
      zoom: 5,
    }),
  });
}

export default LMap;
