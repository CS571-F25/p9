import { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthInput } from './AuthInput';
import { useNavigate } from 'react-router-dom';
import { LoginContext, AuthUsersContext } from '../../context';
import { SearchPanel } from '../Explore';
import { INITIAL_COUNTRY_QUERY_KEY } from '../../constants';
import cn from 'classnames';

export function SignupBlock({ setIsSigningUp, active = true }) {
  const navigate = useNavigate();

  const { login } = useContext(LoginContext);
  const [authUsers, addUser] = useContext(AuthUsersContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [initialCountry, setInitialCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (authUsers.find(user => user.email === email)) {
      alert("User with this email already exists!");
      return;
    }

    console.log('Email:', email, 'Password:', password, 'Repeat Password:', repeatPassword);
    addUser({ email, password });
    login(email);

    alert("Signup successful!");
    navigate(`/explore?${INITIAL_COUNTRY_QUERY_KEY}=${initialCountry}`);
  };

  return <div
      className={cn(
        "absolute inset-0 transition-all duration-500 ease-in-out", active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
      )}
    >
    <div className="bg-[linear-gradient(145deg,#1a0b33_0%,#3a1460_40%,#4e1ace_100%)] text-white p-8 h-full w-full flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <hr className="border-2 border-white w-[80%] self-center opacity-75" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput id="signup-email" state={email} setState={setEmail} label="Email" type="email" />
        <AuthInput id="signup-password" state={password} setState={setPassword} label="Password" type="password" />
        <AuthInput id="signup-repeat-password" state={repeatPassword} setState={setRepeatPassword} label="Repeat Password" type="password" />
        <label className="block !-mb-2" htmlFor="initial-country">Country of Origin (optional)</label>
        <div id="initial-country">
          <SearchPanel selectedCountry={initialCountry} setSelectedCountry={setInitialCountry} />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Sign Up
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account? <Button variant='light' onClick={() => setIsSigningUp(false)}>Log In</Button>
      </p>
    </div>
  </div>;
}