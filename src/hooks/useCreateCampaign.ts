import { api } from "@/config/api";
import { constructCampaignPath } from "@/routes";
import { Campaign } from "@/types/campaign.type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreateCampaign() {
  const navigate = useNavigate();

  const { isError, isPending, mutate } = useMutation({
    mutationFn: () =>
      api.post<Campaign>("/campaigns", { name: "New Campaign" }),
    onSuccess: (data) => navigate(constructCampaignPath(data.data.id)),
  });

  return {
    createCampaign: mutate,
    isPending,
    isError,
  };
}
