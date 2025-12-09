import { LoginBlock, SignupBlock } from '@/components/auth';
import { useState } from 'react';

export function AuthPage() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  return (
    <div className="stretch-provider flex-row items-stretch justify-center h-full relative">
      <img
        src="https://www.universetoday.com/article_images/Andromeda_Galaxy_Hubble.jpg"
        alt="space background"
        className="absolute inset-0 w-full h-full object-cover text-[100px] text-center"
      />
      <div className="stretch-provider w-1/2 relative">
        <LoginBlock setIsSigningUp={setIsSigningUp} active={!isSigningUp} />
      </div>
      <div className="stretch-provider w-1/2 relative">
        <SignupBlock setIsSigningUp={setIsSigningUp} active={isSigningUp} />
      </div>
    </div>
  );
}
