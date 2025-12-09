import { Outlet } from 'react-router';
import { Layout } from '@/components/layout/Layout';
import { LoginContext, AuthUsersContext } from '../context';
import { useLocalStorage } from '@/hooks';
import { LOCAL_STORAGE_USERS_KEY, LOCAL_STORAGE_SIGNED_IN_KEY } from '@/constants';

export function Root() {
  const [authUsers, setAuthUsers] = useLocalStorage(LOCAL_STORAGE_USERS_KEY, []);

  // loginState is the current user email
  const [loginState, setLoginState] = useLocalStorage(LOCAL_STORAGE_SIGNED_IN_KEY, '', false);
  const login = (email) => setLoginState(email);
  const logout = () => setLoginState('');

  const addUser = ({ email, password }) => setAuthUsers((curr) => [...curr, { email, password }]);

  return (
    <AuthUsersContext.Provider value={[authUsers, addUser]}>
      <LoginContext.Provider value={{ loginState, login, logout }}>
        <Layout>
          <Outlet />
        </Layout>
      </LoginContext.Provider>
    </AuthUsersContext.Provider>
  );
}
