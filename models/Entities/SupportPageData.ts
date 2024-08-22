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
