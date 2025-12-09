import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '@/context';
import { Button } from 'react-bootstrap';

export function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useContext(LoginContext);

  const handleLogout = () => {
    logout();
    alert('You have been successfully logged out!');
    navigate('/');
  };

  return <Button variant="danger" onClick={handleLogout}>Logout</Button>;
}