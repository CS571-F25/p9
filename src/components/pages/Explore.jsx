import { InteractiveGlobe } from '../InteractiveGlobe.jsx';
export function Explore() {
  return (
    <div className="bg-black text-white z-1 mx-4">
      <h1>Explore Page</h1>
      <p>Use your mouse to interact with the globe below to explore countries!</p>
      <InteractiveGlobe />
    </div>
  );
}
