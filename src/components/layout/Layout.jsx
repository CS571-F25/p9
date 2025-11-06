export function Layout({ children }) {
  return (
    <div className="mx-auto max-w-screen-2xl flex-1">
      <div className="relative flex min-h-screen flex-col gap-4 overflow-hidden bg-red-200">
        <div className="sticky top-0 z-50 max-h-fit bg-green-300 p-2">
          <header>
            <div className="flex items-center gap-4 transition-all">
              top bar
            </div>
          </header>
        </div>

        <div className="flex h-min max-h-[100px] w-full flex-col items-center justify-center bg-gray-300">
          <h1 className="leading-normal">Layout Banner</h1>
        </div>

        <main className="stretch-provider mx-4 gap-5 border">{children}</main>

        <div className="flex h-min w-full flex-col items-center justify-center bg-gray-400">
          <footer>
            <h1>Layout Footer</h1>
          </footer>
        </div>
      </div>
    </div>
  );
}
