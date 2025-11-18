import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthInput } from './AuthInput';

export function LoginBlock({ setIsSigningUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    // TODO IMPLEMENT LOGIN
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return <div className="bg-white p-8 rounded-lg w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthInput state={email} setState={setEmail} label="Email" type="email" />
      <AuthInput state={password} setState={setPassword} label="Password" type="password" />
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Log In
      </Button>
    </form>
    <p className="mt-4 text-center text-gray-600 text-sm">
      Don't have an account? <Button variant='light' onClick={() => setIsSigningUp(true)}>Sign Up</Button>
    </p>
  </div>;
}