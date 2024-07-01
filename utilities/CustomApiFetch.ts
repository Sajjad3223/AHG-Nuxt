import {$fetch, type FetchError, type FetchOptions} from "ofetch";
import type {ApiResponse} from "~/models/apiResponse";
import {ApiStatusCode} from "~/models/metaData";
import {BASE_URL} from "~/utilities/api.config";

export async function FetchApi<T>(
    url: string,
    config: FetchOptions = {},
): Promise<ApiResponse<T>>
{
    config = {
        baseURL:BASE_URL,
        retry:0,
        credentials:'include',
        ...config
    };

    //@ts-ignore
    return $fetch<ApiResponse<T>>(url,config)
        .then(res=>{
            return res;
        })
        .catch((e:FetchError) =>{
            return {
                data:undefined,
                isSuccess:false,
                metaData:{
                    message: e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده است!",
                    appStatusCode: e.response?._data?.MetaData?.AppStatusCode ?? ApiStatusCode.ServerError,
                },
            }
        });
}