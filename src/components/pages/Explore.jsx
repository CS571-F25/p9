import { useRef, useState, useContext } from 'react';
import { InfoPanel, InteractiveGlobe, SearchPanel, NoAuthPanel } from '../Explore';
import { LoginContext } from '../../context';
import cn from 'classnames';

export function Explore() {
  const { loginState } = useContext(LoginContext);

  const globeRef = useRef();
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div className="stretch-provider relative flex-row">
      <div className="bg-black text-white z-1 ml-4">
        <div className="pointer-events-none">
          <h1>Explore Page</h1>
          <p>Use your mouse to interact with the globe below to explore countries!</p>
        </div>
        <InteractiveGlobe globeRef={globeRef} />
        <div className="flex pointer-events-none">
          <div className="!min-w-[200px] w-[20vw]">
            <SearchPanel globeRef={globeRef} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
          </div>
        </div>
      </div>
      <div className={cn("absolute top-0 right-0 z-1 h-full !w-[300px]", selectedCountry ? "block" : "hidden")}>
        {loginState ? <InfoPanel iso3={selectedCountry} onClose={() => setSelectedCountry('')} /> : <NoAuthPanel countryName={selectedCountry} iso3={selectedCountry} />}
      </div>
    </div>
  );
}
