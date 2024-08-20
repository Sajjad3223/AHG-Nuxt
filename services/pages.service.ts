import type { BecomeDistributorPageData } from "~/models/Entities/BecomeDistributor";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const getBecomeDistributorPageData = () => {
  return FetchApi<BecomeDistributorPageData>("/Pages/GetBecomePageData");
};
