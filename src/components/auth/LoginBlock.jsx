import { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthInput } from './AuthInput';
import { useNavigate } from 'react-router-dom';
import { LoginContext, AuthUsersContext } from '../../context';
import cn from 'classnames';

export function LoginBlock({ setIsSigningUp, active = true }) {
  const navigate = useNavigate();

  const { login } = useContext(LoginContext);
  const [authUsers] = useContext(AuthUsersContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const user = authUsers.find(user => user.email === email);

    if (!user) {
      alert("User with this email does not exist!");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect password!");
      return;
    }

    console.log('Email:', email, 'Password:', password);
    login( email );

    navigate('/explore');
  };

  return <div
      className={cn(
        "absolute inset-0 transition-all duration-500 ease-in-out", active ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      )}
    >
    <div className="bg-[linear-gradient(135deg,#0a0f44_0%,#12268d_50%,#1e3ad0_100%)] p-8 w-full h-full flex flex-col justify-center text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput id="login-email" state={email} setState={setEmail} label="Email" type="email" />
        <AuthInput id="login-password" state={password} setState={setPassword} label="Password" type="password" />
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Log In
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account? <Button variant='light' onClick={() => setIsSigningUp(true)}>Sign Up</Button>
      </p>
    </div>
  </div>;
}