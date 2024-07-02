import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface HomeDataDto{
    latestProducts: ProductFilterData[]
    sliders: Slider[]
    activeBanners: Banner[]
}

export interface ProductFilterData extends BaseDto{
    slug: string
    title: string
    price: number
    imageName: string
    discountPercentage: number
    description: string
    shortLink: string
    isActive: boolean
    visit: number
    categoryId: number
    subCategoryId: number
    totalPrice: number
}

export interface ProductDto extends BaseDto{
    slug: string
    title: string
    price: number
    imageName: string
    discountPercentage: number
    description: string
    shortLink: string
    isActive: boolean
    visit: number
    categoryId: number
    subCategoryId: number
    lastModify: string
    seoData: SeoData
    customSpecifications: Specification[]
    totalPrice: number
}

export interface ProductFilterParams extends BaseFilterParams{
    search?: string | undefined
    slug?: string | undefined
    status?: string | undefined
}
export interface ProductFilterResult extends BaseFilterResult<ProductFilterData>{}

export interface CategoryDto extends BaseDto{
    title: string
    slug: string
    seoData: SeoData
    imageName: string
    parentId: number
}

export interface SeoData {
    metaTitle: string
    metaDescription: string
    metaKeyWords: string
    indexPage: boolean
    canonical: string
    schema: string
    twitterImage: string
    ogImage: string
}

export interface Specification extends BaseDto{
    productId: number
    key: string
    value: string
}


export interface Slider extends BaseDto{
    imageName: string
    title: string
    buttonTitle: string
    link: string
    shortDescription: string
}

export interface Banner extends BaseDto{
    imageName: string
    title: string
    link: string
    shortDescription: string
    bannerPosition: string
    buttonTitle: string
}

export interface SiteSettings extends BaseDto{
    siteTitle: string
    siteName: string
    footerText: string
    phoneNumber: string
    telePhone: string
    address: string
    aboutUs: string
    locationUrl: string
    email: string
    emailPassword: string
    emailSmtpPort: number
    emailSmtpServer: string
    instagram: string
    telegram: string
    linkdin: string
    whatsApp: string
    facebook: string
    twitter: string
    mainPageSeoData: SeoData
}