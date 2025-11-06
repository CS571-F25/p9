import { Outlet } from 'react-router';
import { Layout } from '@/components/layout/Layout';

export function Root() {
  return (
    <Layout>
      <h1 className="font-bold">PAGE:</h1>
      <div className="stretch-provider border">
        <Outlet />
      </div>
    </Layout>
  );
}
