import { API, getApiUrl } from "@scottbenton/apps-config";
import { useCurrentUser } from "auth_ui/useCurrentUser";
import axios from "axios";
import { useEffect } from "react";

export const api = axios.create({
  baseURL: getApiUrl(API.DungeonManager),
});

export function useApiInterceptor() {
  const { getAccessToken } = useCurrentUser();

  useEffect(() => {
    console.debug("Adding auth interceptor");
    const interceptorId = api.interceptors.request.use(async (config) => {
      const token = await getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(interceptorId);
    };
  }, [getAccessToken]);

  return api;
}
