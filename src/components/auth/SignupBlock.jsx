import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthInput } from './AuthInput';

export function SignupBlock({ setIsSigningUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    // TODO IMPLEMENT SIGNUP
    e.preventDefault();
    console.log('Email:', email, 'Password:', password, 'Repeat Password:', repeatPassword);
  };

  return <div className="bg-white p-8 rounded-lg w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthInput state={email} setState={setEmail} label="Email" type="email" />
      <AuthInput state={password} setState={setPassword} label="Password" type="password" />
      <AuthInput state={repeatPassword} setState={setRepeatPassword} label="Repeat Password" type="password" />
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Sign Up
      </Button>
    </form>
    <p className="mt-4 text-center text-gray-600 text-sm">
      Already have an account? <Button variant='light' onClick={() => setIsSigningUp(false)}>Log In</Button>
    </p>
  </div>;
}