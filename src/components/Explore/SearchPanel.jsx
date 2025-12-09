import { useState, useMemo, useEffect, useCallback } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCountryCenter } from '../../hooks';
import { CountryList } from './CountryList';
import { countries } from '../../constants';

export function SearchPanel({ globeRef, selectedCountry, setSelectedCountry }) {
  const [search, setSearch] = useState("");
  const { data: countryCenter, isLoading, isError } = useCountryCenter(selectedCountry);
  const [showList, setShowList] = useState(false);

  const sortedCountries = useMemo(() => {
    return [...countries].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredCountries = useMemo(() => {
    if (!search.trim()) return sortedCountries;
    return sortedCountries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [sortedCountries, search]);

  const moveTo = useCallback((lat, lng, time=1000, altitude=2) => {
    globeRef.current.pointOfView({ lat, lng, altitude }, time);
  }, [globeRef]);

  useEffect(() => {
    if (countryCenter) {
      moveTo(countryCenter.lat, countryCenter.lng);
    }
  }, [countryCenter, moveTo]);

  return <Card className="pointer-events-none p-2 !bg-[#88ddff]">
    <Card.Body className="p-0">
    <label htmlFor="country-search" className="sr-only">
      Search for a country
    </label>
    <input 
      id="country-search"
      className="mb-3 w-full p-2 border border-gray-300 rounded pointer-events-auto"
      type="text"
      placeholder="Search for a country..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
      <Button onClick={() => setShowList(!showList)} className="pointer-events-auto">
        {showList ? "Hide" : "Show"} Countries
      </Button>
      <CountryList
        countries={filteredCountries}
        active={showList}
        selectedCountry={selectedCountry}
        onClick={(iso) => {
          setSelectedCountry(iso);
          setShowList(false);
        }}
      />
    </Card.Body>
  </Card>;
}