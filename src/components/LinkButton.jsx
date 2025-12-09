import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function LinkButton({ url, label, internal = false }) {
  return internal ? (
    <Button as={Link} to={url} variant="primary" className="w-fit">
      {label}
    </Button>
  ) : (
    <Button as="a" href={url} target="_blank" rel="noopener noreferrer" variant="primary" className="w-fit">
      {label}
    </Button>
  );
}