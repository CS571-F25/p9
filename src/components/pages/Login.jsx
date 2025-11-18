import { LoginBlock, SignupBlock } from '@/components/auth';
import { useState } from 'react';

export function Login() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  return (
    <div className="stretch-provider items-center justify-center">
      {isSigningUp ? <SignupBlock setIsSigningUp={setIsSigningUp} /> : <LoginBlock setIsSigningUp={setIsSigningUp} />}
    </div>
  );
}
