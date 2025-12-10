import cn from 'classnames';
import { Button } from 'react-bootstrap';

export function CountryList({ countries, active=true, selectedCountry, onClick }) {
  if (!active || !countries.length) return null;

  return <div className="mt-2 max-h-[300px] overflow-y-auto relative pointer-events-auto w-full">
    {countries.map((country) => (
      <Button
        key={country.iso}
        className={cn(
          "w-full text-left mb-1 p-2 rounded cursor-pointer",
          selectedCountry === country.iso ? "text-white" : "bg-white text-black"
        )}
        onClick={() => onClick(country)}
      >
        {country.name}
      </Button>
    ))}
  </div>;
}