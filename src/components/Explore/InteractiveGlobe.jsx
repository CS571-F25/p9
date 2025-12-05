import Globe from "react-globe.gl";

export function InteractiveGlobe({ globeRef }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        />
    </div>
  );
}