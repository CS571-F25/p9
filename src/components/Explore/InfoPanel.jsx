import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { COUNTRY_INFO_API_BASE } from "../../constants";
import { SearchButton } from "../SearchButton";

export function InfoPanel({ iso3, onClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!iso3) return;

    const fetchData = async () => {
      setLoading(true);
      setData(null);

      try {
        const response = await fetch(
          `${COUNTRY_INFO_API_BASE}/${iso3}`
        );
        const json = await response.json();

        if (json && json[0]) {
          const c = json[0];
          setData({
            name: c.name.common,
            iso3: iso3,
            area: c.area,
            population: c.population,
            continent: c.continents?.[0] ?? "Unknown",
          });
        }
      } catch {
        setData(null);
      }

      setLoading(false);
    };

    fetchData();
  }, [iso3]);

  if (!iso3) return null;
  if (loading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" />
      </div>
    );
  }
  if (!data) return null;

  return (
    <div className="stretch-provider h-full">
      <Card className="!bg-[#88ddff] stretch-provider">
        <Card.Body className="p-0">
          <div className="cursor-pointer p-2 bg-gray-200 rounded-full font-bold text-center" onClick={onClose}>X</div>
          <h1>{data.name}</h1>
          <p><strong>ISO3:</strong> {data.iso3}</p>
          <p><strong>Continent:</strong> {data.continent}</p>
          <p><strong>Area:</strong> {data.area.toLocaleString()} km²</p>
          <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
          <br />
          <SearchButton queryText={`All About ${data.name}`} />
        </Card.Body>
      </Card>
    </div>
  );
}