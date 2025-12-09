import { LoginBlock, SignupBlock } from '@/components/auth';
import { useState } from 'react';

export function AuthPage() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  return (
    <div className="stretch-provider flex-row items-stretch justify-center bg-[url('https://www.universetoday.com/article_images/Andromeda_Galaxy_Hubble.jpg')] bg-cover bg-center h-full">
      <div className="stretch-provider w-1/2 relative">
        <LoginBlock setIsSigningUp={setIsSigningUp} active={!isSigningUp} />
      </div>
      <div className="stretch-provider w-1/2 relative">
        <SignupBlock setIsSigningUp={setIsSigningUp} active={isSigningUp} />
      </div>
    </div>
  );
}
