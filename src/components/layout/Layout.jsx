import { Navbar, Nav } from "react-bootstrap";
import { routes } from "@/router/routes";
import { useContext } from "react";
import { LoginContext } from "@/context";
import { LogoutButton } from "../auth";

const routeBase = '/p9/#';

export function Layout({ children }) {
  const { loginState } = useContext(LoginContext);

  return (
    <div className="mx-auto max-w-screen-2xl flex-1">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-center">
        <div className="sticky top-0 z-50 max-h-fit bg-green-300 p-2">
          <Navbar expand="lg">
            <Navbar.Brand href={routeBase}>GlobeGetter</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                {routes.map(({ path, name }) => {
                  if (name === 'Login' && loginState) return <LogoutButton key={path} />;
                  return <Nav.Link key={path} href={routeBase + path}>
                    {name}
                  </Nav.Link>
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        {/* <div className="flex h-min max-h-[100px] w-full flex-col items-center justify-center bg-gray-300">
          <h1 className="leading-normal">Layout Banner</h1>
        </div> */}

        <main className="stretch-provider gap-5">{children}</main>

        {/* <div className="flex h-min w-full flex-col items-center justify-center bg-gray-400">
          <footer>
            <h1>Layout Footer</h1>
          </footer>
        </div> */}
      </div>
    </div>
  );
}
