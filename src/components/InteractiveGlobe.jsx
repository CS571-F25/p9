import React, { useRef, useState } from 'react';
import Globe from 'react-globe.gl';

export function InteractiveGlobe() {
  const globeEl = useRef();
  const [activeCountry, setActiveCountry] = useState(null);

  return <div className="absolute top-0 left-0 w-full h-full -z-10">
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      polygonsData={null} // TODO IMPLEMENT
      onPolygonClick={feat => {
        console.log(feat)
        setActiveCountry(feat)
      }}
    />
  </div>;
}