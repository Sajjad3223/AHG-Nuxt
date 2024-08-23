import type { Bpm300PageData } from "~/models/Entities/SupportPageData";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const getBPM300PageData = () => {
  return FetchApi<Bpm300PageData>("/Product/GetBpmData");
};
