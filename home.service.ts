import {FetchApi} from "~/utilities/CustomApiFetch";
import type {ApiResponse} from "~/models/apiResponse";
import type {
    Banner, CategoryDto,
    HomeDataDto, ProductDto,
    ProductFilterParams,
    ProductFilterResult,
    SiteSettings,
    Slider
} from "~/models/homeDataDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {BaseFilterParams} from "~/models/baseFilterParams";

// ---- Home
export const GetHomeData = ():Promise<ApiResponse<HomeDataDto>> => {
    return FetchApi('/Home',{
        method:'GET'
    });
}
export const GetSiteSettings = ():Promise<ApiResponse<SiteSettings>> => {
    return FetchApi('/Home/GetSiteSettings',{
        method:'GET'
    });
}
export const GetBanners = ():Promise<ApiResponse<Banner[]>> => {
    return FetchApi('/Home/GetBanners',{
        method:'GET'
    });
}
export const GetSliders = (filterParams:BaseFilterParams):Promise<ApiResponse<BaseFilterResult<Slider>>> => {
    return FetchApi('/Home/GetSliders',{
        method:'GET',
        params:filterParams
    });
}

// ---- Products
export const GetProducts = (filterParams:ProductFilterParams):Promise<ApiResponse<ProductFilterResult>> => {
    return FetchApi('/Product/GetProducts',{
        method:'GET',
        params:filterParams
    });
}

export const GetProductById = (productId:number):Promise<ApiResponse<ProductDto>> => {
    return FetchApi(`/Product/${productId}`,{
        method:'GET'
    });
}
export const GetProductBySlug = (slug:string):Promise<ApiResponse<ProductDto>> => {
    return FetchApi(`/Product/bySlug/${slug}`,{
        method:'GET'
    });
}
export const GetCategories = ():Promise<ApiResponse<CategoryDto[]>> => {
    return FetchApi(`/Product/GetProductCategories`,{
        method:'GET'
    });
}