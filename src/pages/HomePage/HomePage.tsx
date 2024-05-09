import { useCurrentUser } from "auth_ui/useCurrentUser";
import { useCampaigns } from "../../hooks/useCampaigns";
import { Alert } from "@/components/Generic/Alert";
import { Link } from "react-router-dom";
import { constructCampaignPath } from "@/routes";
import { useCreateCampaign } from "@/hooks/useCreateCampaign";
import { Button } from "@/components/Generic/Button";
import EndIcon from "@heroicons/react/16/solid/PlusCircleIcon";
import { GridList } from "@/components/Generic/GridList";

/**
 * TODO
 *
 * Add a loading state to the page
 * Create a generic grid list component
 * Create a generic card component
 *
 * Create a generic skeleton component
 */

export function HomePage() {
  const { user } = useCurrentUser();

  const { campaigns, isPending, error } = useCampaigns();
  const {
    createCampaign,
    isPending: isCreatingCampaign,
    isError: hasCreateCampaignError,
  } = useCreateCampaign();

  if (!user) {
    return <>You must be logged in</>;
  }

  return (
    <div>
      <div className="border-b border-gray-700 pb-4 flex items-center justify-between">
        <h1 className={"font-title font-bold text-4xl"}>Your Campaigns</h1>
        <Button
          onClick={() => createCampaign()}
          variant={"primary"}
          Icon={EndIcon}
          isPending={isCreatingCampaign}
        >
          Create Campaign
        </Button>
      </div>
      <div className={"mt-8"}>
        {isPending && <>Loading...</>}
        {error && (
          <Alert type="error" className={"mb-4"}>
            {error.message}
          </Alert>
        )}
        {hasCreateCampaignError && (
          <Alert type="error" className={"mb-4"}>
            Failed to create a new campaign.
          </Alert>
        )}
        {campaigns.length > 0 && (
          <GridList
            items={campaigns}
            renderItem={(campaign) => (
              <Link
                to={constructCampaignPath(campaign.id)}
                className={
                  "border border-gray-600 bg-gray-900 p-4 flex-grow hover:bg-gray-800 cursor-pointer"
                }
              >
                <span className={"text-lg font-semibold"}>{campaign.name}</span>
              </Link>
            )}
          />
        )}
      </div>
    </div>
  );
}
