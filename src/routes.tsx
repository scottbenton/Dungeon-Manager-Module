import { RouteObject } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { ImagePage } from "./pages/ImagePage";
import { AuthBlocker } from "./components/AuthBlocker";

export const basePath = "dungeon-manager";

export function constructCampaignPath(campaignId: string) {
  return `/${basePath}/${campaignId}`;
}

export const routes: RouteObject[] = [
  {
    path: basePath,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <AuthBlocker>
            <HomePage />
          </AuthBlocker>
        ),
      },
      {
        path: ":campaignId",
        element: (
          <AuthBlocker requireAuth>
            <span>Campaign Page</span>
          </AuthBlocker>
        ),
      },
      {
        path: "images",
        element: (
          <AuthBlocker requireAuth>
            <ImagePage />
          </AuthBlocker>
        ),
      },
    ],
  },
];
