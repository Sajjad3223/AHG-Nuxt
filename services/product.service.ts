import type { Bgm2022Data } from "~/models/Entities/Bgm2022Data";
import type { Category, ProductCard } from "~/models/Entities/CategoryData";
import type { Bpm300PageData } from "~/models/Entities/SupportPageData";
import { FetchApi } from "~/utilities/CustomApiFetch";
import type {ProductDto, ProductMenuItem} from "~/models/Entities/ProductDto";
import type {ApiResponse} from "~/models/apiResponse";

export const getBPM300PageData = () => {
  return FetchApi<Bpm300PageData>("/Product/GetBpmData");
};
export const getBgm2022PageData = () => {
  return FetchApi<Bgm2022Data>("/Product/GetBgmData");
};
export const getBgm2285PageData = () => {
  return FetchApi<Bgm2022Data>("/Product/GetBgm2285Data");
};
export const getCategoryData = () => {
  return FetchApi<Category[]>("/product/getCategories");
};
export const getProductCardsData = () => {
  return FetchApi<ProductCard[]>("/product/getProductCards");
};
export const getProductBySlug = (slug:string):Promise<ApiResponse<ProductDto>> =>{
  return FetchApi<ProductDto>(`/product/bySlug/${slug}`);
}
