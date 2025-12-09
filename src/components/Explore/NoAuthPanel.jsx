import { LinkButton } from '@/components';
import { countries } from '../../constants';
import { Card } from 'react-bootstrap';

export function NoAuthPanel({ iso3 }) {
  const country = countries.find(c => c.iso === iso3);
  const countryName = country ? country.name : "Unknown Country";

  return (
    <div className="stretch-provider h-full">
      <Card className="!bg-[#88ddff] stretch-provider">
        <Card.Body className="p-0">
          <div>
            <h1 className="mb-4 text-[30px]">{countryName} ({iso3})</h1>
            <h2 className="mb-4 text-[20px] font-medium">Log in to see more info</h2>
            <LinkButton url="/auth" label="Log In!" internal />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}