export interface ProductDto {
    id: number
    title: string
    slug: string
    shortDescription: string
    description: any
    buttonTitle: string
    buttonLink: string
    imageName: string
    specificationTitle: any
    specificationImageName: string
    specifications: Specification[]
    detailTitle: string
    detailShortDescription: string
    details: Detail[]
    featureTitle: any
    featureShortDescription: any
    featureImageName: string
    features: Feature[]
    informationTitle: any
    informationShortDescription: any
    informationImageName: string
    informations: Information[]
    appBannerFirstTitle: any
    appBannerFirstShortDescription: any
    appBannerSecondTitle: any
    appBannerSecondShortDescription: any
    appBannerQRImageName: string
    secondBannerTitle: any
    secondBannerShortDescription: any
    secondBannerDescription: any
    secondBannerImageName: string
    supportBannerTitle: any
    supportBannerFirstButtonTitle: any
    supportBannerFirstButtonLink: any
    supportBannerSecondButtonTitle: any
    supportBannerSecondButtonLink: any
    supportBannerShortDescription: any
}

export interface Specification {
    productId: number
    title: string
    description: string
}
export interface Feature {
    productId: number
    title: string
    description: string
}

export interface Detail {
    productId: number
    title: string
    description: string
    imageName: string
}

export interface Information {
    productId: number
    title: string
    description: string
    imageName: string
}

export interface ProductMenuItem{
    id:number;
    title:string;
}