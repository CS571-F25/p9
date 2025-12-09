import { useQuery } from '@tanstack/react-query';

const fetchCountryCenter = async (iso3) => {
  if (!iso3 || iso3.length !== 3) throw new Error("ISO3 code is required");
  const response = await fetch(`https://inmagik.github.io/world-countries/countries/${iso3}.json`);
  const data = await response.json();
  const center = data.representative_point;
  return { lat: center[1], lng: center[0] };
};

export const useCountryCenter = (iso3) => {
  return useQuery({
    queryKey: ['center', iso3],
    queryFn: () => fetchCountryCenter(iso3),
    enabled: !!iso3 && iso3.length === 3,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
