import { useState, useMemo, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCountryCenter } from '../../hooks';
import { CountryList } from './CountryList';
import { countries } from '../../constants';

export function SearchPanel({ selectedCountry, setSelectedCountry, moveTo = () => {} }) {
  const [search, setSearch] = useState("");
  const [doFilter, setDoFilter] = useState(true);
  const { data: countryCenter } = useCountryCenter(selectedCountry);
  const [showList, setShowList] = useState(false);

  const setCountry = (country) => {
    setSearch(country.name);
    setSelectedCountry(country.iso);
  }

  const sortedCountries = useMemo(() => {
    return [...countries].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredCountries = useMemo(() => {
    if (!doFilter || !search.trim()) return sortedCountries;
    return sortedCountries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [sortedCountries, search, doFilter]);

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
      onChange={(e) => setSearch(prev => {
        if (!prev && e.target.value) setShowList(true);
        setDoFilter(true);
        return e.target.value;
      })}
    />
      <Button onClick={() => setShowList(!showList)} className="pointer-events-auto">
        {showList ? "Hide" : "Show"} Countries
      </Button>
      <CountryList
        countries={filteredCountries}
        active={showList}
        selectedCountry={selectedCountry}
        onClick={(country) => {
          setCountry(country);
          setShowList(false);
          setDoFilter(false);
        }}
      />
    </Card.Body>
  </Card>;
}