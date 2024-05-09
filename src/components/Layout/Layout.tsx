import { Outlet } from "react-router-dom";

import "@fontsource-variable/playfair-display";
import "../../index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useApiInterceptor } from "../../config/api";

const dungeonManagerQueryClient = new QueryClient();

export function Layout() {
  useApiInterceptor();
  return (
    <QueryClientProvider client={dungeonManagerQueryClient}>
      <div id={"dungeon-manager"}>
        <div className={"flex h-lvh bg-gray-950 text-white"}>
          {/* <NavRail /> */}
          <main
            className={
              "flex-grow overflow-auto min-h-lvh p-6 max-w-screen-xl mx-auto"
            }
          >
            <Outlet />
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
