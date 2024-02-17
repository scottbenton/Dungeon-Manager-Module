import { RouteObject } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const routes: RouteObject[] = [
  {
    path: "dungeon-manager",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];
