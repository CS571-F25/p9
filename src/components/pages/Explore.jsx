import { useRef, useState, useContext, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InfoPanel, InteractiveGlobe, SearchPanel, NoAuthPanel } from '../Explore';
import { LoginContext } from '../../context';
import { useCountryCenter } from '../../hooks';
import { INITIAL_COUNTRY_QUERY_KEY } from '../../constants';
import cn from 'classnames';

export function Explore() {
  const { loginState } = useContext(LoginContext);
  
  const [searchParams] = useSearchParams();
  const initialCountry = searchParams.get(INITIAL_COUNTRY_QUERY_KEY);

  const { data: initialCenter } = useCountryCenter(initialCountry);

  const globeRef = useRef();
  const [selectedCountry, setSelectedCountry] = useState(initialCountry || '');

  const moveTo = useCallback((lat, lng, time=1000, altitude=2) => {
    if (!globeRef || !globeRef.current) return;

    globeRef.current.pointOfView({ lat, lng, altitude }, time);
  }, [globeRef]);

  useEffect(() => {
    if (!initialCenter) return;

    moveTo(initialCenter.lat, initialCenter.lng);
  }, [initialCenter, moveTo]);

  return (
    <div className="stretch-provider relative flex-row">
      <div className="bg-black text-white z-1 ml-4">
        <div className="pointer-events-none">
          <h1>Explore</h1>
          <p>Use your mouse to interact with the globe below to explore countries!</p>
        </div>
        <InteractiveGlobe globeRef={globeRef} />
        <div className="flex pointer-events-none">
          <div className="!min-w-[200px] w-[20vw]">
            <SearchPanel globeRef={globeRef} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} moveTo={moveTo} />
          </div>
        </div>
      </div>
      <div className={cn("absolute top-0 right-0 z-1 h-full !w-[300px]", selectedCountry ? "block" : "hidden")}>
        {loginState ? <InfoPanel iso3={selectedCountry} onClose={() => setSelectedCountry('')} /> : <NoAuthPanel countryName={selectedCountry} iso3={selectedCountry} />}
      </div>
    </div>
  );
}
