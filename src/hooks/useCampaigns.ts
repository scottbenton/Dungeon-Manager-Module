import { useQuery } from "@tanstack/react-query";
import { api } from "../config/api";
import { Campaign } from "../types/campaign.type";

export function useCampaigns() {
  const { data, error, isPending } = useQuery({
    queryKey: ["campaigns"],
    queryFn: () => api.get<Campaign[]>("/campaigns"),
  });

  return {
    campaigns: data?.data || [],
    error,
    isPending,
  };
}
