import { useNavigate } from 'react-router';
import { ROUTES } from '@/constants';

export function NotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTES.ROOT);
  };

  return (
    <div className="stretch-provider px-6 text-center">
      <h1 className="mb-5 text-3xl font-bold lg:text-[40px] lg:leading-[40px]">404! Page Not Found</h1>
      <p className="mb-8 lg:text-xl">Perhaps you should practice typing correct URLs!</p>
      <div className="mb-8 flex flex-col items-center gap-10">
        <button onClick={onClick} type="button">
          Take Me Home
        </button>
      </div>
    </div>
  );
}
