import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function LinkButton({ url, label }) {
  return (
    <Button as={Link} to={url} variant="primary" className="w-fit">
      {label}
    </Button>
  );
}