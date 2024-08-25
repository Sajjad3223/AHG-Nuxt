import type { Bgm2022Data } from "~/models/Entities/Bgm2022Data";
import type { Category, ProductCard } from "~/models/Entities/CategoryData";
import type { Bpm300PageData } from "~/models/Entities/SupportPageData";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const getBPM300PageData = () => {
  return FetchApi<Bpm300PageData>("/Product/GetBpmData");
};
export const getBgm2022PageData = () => {
  return FetchApi<Bgm2022Data>("/Product/GetBgmData");
};
export const getCategoryData = () => {
  return FetchApi<Category[]>("/product/getCategories");
};
export const getProductCardsData = () => {
  return FetchApi<ProductCard[]>("/product/getProductCards");
};