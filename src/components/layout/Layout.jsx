import { Navbar, Nav } from "react-bootstrap";
import { routes } from "@/router/routes";

const routeBase = '/p9/#';

export function Layout({ children }) {
  return (
    <div className="mx-auto max-w-screen-2xl flex-1">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-[url('/src/assets/nightsky.jpg')] bg-center">
        <div className="sticky top-0 z-50 max-h-fit bg-green-300 p-2">
          <Navbar expand="lg">
            <Navbar.Brand href={routeBase}>GlobeGetter</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                {routes.map(({ path, name }) => (
                  <Nav.Link key={path} href={routeBase + path}>
                    {name}
                  </Nav.Link>
                ))}
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
