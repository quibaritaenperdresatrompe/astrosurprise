import React, { useEffect, useState } from 'react';
import Video from 'video.js';

const Apod = ({ apiKey }) => {
  const [apod, setApod] = useState({
    date: '2021-02-04',
    explanation:
      "Fifty years ago this Friday, Apollo 14's Lunar Module Antares landed on the Moon. Toward the end of the stay astronaut Ed Mitchell snapped a series of photos of the lunar surface while looking out a window, assembled into this detailed mosaic by Apollo Lunar Surface Journal editor Eric Jones. The view looks across the Fra Mauro highlands to the northwest of the landing site after the Apollo 14 astronauts had completed their second and final walk on the Moon. Prominent in the foreground is their Modular Equipment Transporter, a two-wheeled, rickshaw-like device used to carry tools and samples. Near the horizon at top center is a 1.5 meter wide boulder dubbed Turtle rock. In the shallow crater below Turtle rock is the long white handle of a sampling instrument, thrown there javelin-style by Mitchell. Mitchell's fellow moonwalker and first American in space, Alan Shepard, also used a makeshift six iron to hit two golf balls. One of Shepard's golf balls is just visible as a white spot below Mitchell's javelin.",
    hdurl: 'https://apod.nasa.gov/apod/image/2102/a14pan9335-43emj.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Apollo 14: A View from Antares',
    url: 'https://apod.nasa.gov/apod/image/2102/a14pan9335-43emj_900.jpg',
  });

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          setApod(JSON.parse(JSON.stringify(data)));
        } else {
          alert(`Could not receive data from APOD : ${JSON.stringify(data)}`);
        }
      })
      .catch((err) => console.error('Sorry Dude :', err));
    console.log('apod : ', apod);
  }, []);

  if (apod.media_type === 'video') {
    return <Video videoSrc={apod.url} />;
  } else {
    return (
      <div className="flex flex-column items-center justify-center">
        <p className="f2 mid-gray avenir">{apod.title}</p>

        <a className="link dim mid-gray pa3 avenir" href={apod.hdurl}>
          <img className="img vw-100 vh-75-ns" src={apod.url} alt={apod.title} />
        </a>
      </div>
    );
  }
};

export default Apod;
