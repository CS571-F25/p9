import { Outlet } from 'react-router';
import { Layout } from '@/components/layout/Layout';

export function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
