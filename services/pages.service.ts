import type { BecomeDistributorPageData } from "~/models/Entities/BecomeDistributor";
import type { LandingPageData } from "~/models/Entities/LandingPageData";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const getBecomeDistributorPageData = () => {
  return FetchApi<BecomeDistributorPageData>("/Pages/GetBecomePageData");
};

export const getLandingPageData = () => {
  return FetchApi<LandingPageData>("/Pages/GetLandingPageData");
};