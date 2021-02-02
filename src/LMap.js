import 'ol/ol.css';
import { Map, View } from 'ol';
import Feature from 'ol/Feature';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

function LMap(data) {
  let issPosition = [Number(data.iss_position.longitude), Number(data.iss_position.latitude)];
  console.log(issPosition);

  let issFeature = new Feature({
    geometry: new Point(fromLonLat(issPosition)),
  });

  issFeature.setStyle(
    new Style({
      image: new Icon({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        // For Internet Explorer 11
        imgSize: [20, 20],
        src: './dot.svg',
      }),
    }),
  );

  console.log(issFeature);

  var rome = new Feature({
    geometry: new Point(fromLonLat([12.5, 41.9])),
  });

  var london = new Feature({
    geometry: new Point(fromLonLat([-0.12755, 51.507222])),
  });

  var madrid = new Feature({
    geometry: new Point(fromLonLat([-3.683333, 40.4])),
  });
  var paris = new Feature({
    geometry: new Point(fromLonLat([2.353, 48.8566])),
  });
  var berlin = new Feature({
    geometry: new Point(fromLonLat([13.3884, 52.5169])),
  });

  rome.setStyle(
    new Style({
      image: new Icon({
        color: '#BADA55',
        crossOrigin: 'anonymous',
        // For Internet Explorer 11
        imgSize: [20, 20],
        src: 'data/square.svg',
      }),
    }),
  );

  london.setStyle(
    new Style({
      image: new Icon({
        color: 'rgba(255, 0, 0, .5)',
        crossOrigin: 'anonymous',
        src: 'data/bigdot.png',
        scale: 0.2,
      }),
    }),
  );

  madrid.setStyle(
    new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        src: 'data/bigdot.png',
        scale: 0.2,
      }),
    }),
  );

  paris.setStyle(
    new Style({
      image: new Icon({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        // For Internet Explorer 11
        imgSize: [20, 20],
        src: 'data/dot.svg',
      }),
    }),
  );

  berlin.setStyle(
    new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        // For Internet Explorer 11
        imgSize: [20, 20],
        src: 'data/dot.svg',
      }),
    }),
  );
  var vectorSource = new VectorSource({
    features: [rome, london, madrid, paris, berlin],
  });

  // var vectorSource = new VectorSource({
  //   features: [issFeature],
  // });

  var vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  var mapLayer = new TileLayer({ source: new OSM() });

  const map = new Map({
    target: 'map',
    layers: [vectorLayer, mapLayer],
    view: new View({
      center: fromLonLat(issPosition),
      zoom: 5,
    }),
  });
}

export default LMap;
