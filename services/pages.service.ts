import type { BecomeDistributorPageData } from "~/models/Entities/BecomeDistributor";
import type { LandingPageData } from "~/models/Entities/LandingPageData";
import type {
  InstructionData,
  SupportPageData,
} from "~/models/Entities/SupportPageData";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const getBecomeDistributorPageData = () => {
  return FetchApi<BecomeDistributorPageData>("/Pages/GetBecomePageData");
};

export const getLandingPageData = () => {
  return FetchApi<LandingPageData>("/Pages/GetLandingPageData");
};

export const getSupportPageData = () => {
  return FetchApi<SupportPageData>("/Pages/GetSupportPageData");
};

export const getInstructions = () => {
  return FetchApi<InstructionData[]>("/Pages/GetInstructions");
};
