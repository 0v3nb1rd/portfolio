export default function Home() {
  return (
    <main>
      <section className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center">
        <div className="container">
          <div className="py-12">
            <div className="mx-auto grid max-w-5xl grid-cols-4 grid-rows-4 gap-5 lg:grid-cols-3">
              <div className="height-auto text-foreground relative col-span-full flex flex-col overflow-hidden rounded-md outline-none motion-reduce:transition-none lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2">
                <div className="bg-muted/50 col-span-full flex h-full items-center justify-center rounded-md">
                  <h1 className="h1">1 Main</h1>
                </div>
              </div>

              <div className="height-auto text-foreground relative col-span-full flex flex-col overflow-hidden outline-none motion-reduce:transition-none lg:col-span-2 lg:row-span-1 lg:row-start-1">
                <div className="bg-muted/50 col-span-full flex h-full items-center justify-center rounded-md">
                  <h1 className="h1">2 Section</h1>
                </div>
              </div>

              <div className="height-auto text-foreground relative col-span-full row-start-2 row-end-3 flex flex-col overflow-hidden outline-none motion-reduce:transition-none lg:col-span-1 lg:col-start-1 lg:row-start-2">
                <div className="bg-muted/50 col-span-full flex h-full items-center justify-center rounded-md">
                  <h1 className="h1">3 Section</h1>
                </div>
              </div>

              <div className="height-auto text-foreground relative col-span-2 hidden flex-col overflow-hidden outline-none motion-reduce:transition-none lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 lg:flex">
                <div className="bg-muted/50 col-span-full flex h-full items-center justify-center rounded-md">
                  <h1 className="h1">4 Section</h1>
                </div>
              </div>

              <div className="height-auto text-foreground relative col-span-full flex flex-col overflow-hidden outline-none motion-reduce:transition-none lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3">
                <div className="bg-muted/50 col-span-full flex h-full items-center justify-center rounded-md">
                  <h1 className="h1">5 Section</h1>
                </div>
              </div>

              <div className="relative hidden lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:block lg:h-[350px]">
                <div className="bg-muted/50 col-span-full flex h-full items-center justify-center rounded-md">
                  <h1 className="h1">6 Section</h1>
                </div>
              </div>

              <div className="height-auto text-foreground relative col-span-full flex flex-col overflow-hidden outline-none motion-reduce:transition-none lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-4">
                <div className="bg-muted/50 col-span-full flex h-full items-center justify-center rounded-md">
                  <h1 className="h1">7 Section</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
