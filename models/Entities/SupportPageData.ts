export interface SupportPageData {
  title: string;
  shortDescription: string;
  imageName: string;
  categorySectionTitle: string;
  categorySectionShortDescription: string;
  catalogSectionTitle: string;
  catalogSectionShortDescription: string;
  appBannerFirstTitle: string;
  appBannerFirstShortDescription: string;
  appBannerSecondTitle: string;
  appBannerSecondShortDescription: string;
  appBannerQRImageName: string;
  instructionSectionTitle: string;
  instructionSectionShortDescription: string;
  distributionBannerTitle: string;
  distributionBannerButtonTitle: string;
  distributionBannerButtonLink: string;
  distributionBannerShortDescription: string;
}
export interface InstructionData {
  title: string;
  instructionItems: { title: string; fileName: string }[];
}
export interface Bpm300PageData {
  title: string;
  backgroundImageName: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
  imageName: string;
  measurementTitle: string;
  measurementShortDescription: string;
  measurements: {
    title: string;
    imageName: string;
  }[];
  detailTitle: string;
  detailShortDescription: string;
  details: {
    title: string;
    description: string;
    imageName: string;
  }[];
  specificationTitle: string;
  specificationShortDescription: string;
  specificationImageName: string;
  specifications: {
    title: string;
    description: string;
  }[];
  bannerTitle: string;
  bannerShortDescription: string;
  bannerDescription: string;
  bannerImageName: string;
  supportBannerTitle: string;
  supportBannerFirstButtonTitle: string;
  supportBannerFirstButtonLink: string;
  supportBannerSecondButtonTitle: string;
  supportBannerSecondButtonLink: string;
  supportBannerShortDescription: string;
}
