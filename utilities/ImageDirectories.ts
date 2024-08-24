import { ImageDomain } from "./api.config";

export const getContactUsImage = (imageName: string) => {
  return `${ImageDomain}/images/ContactUsPage/${imageName}`;
};

export const getAboutImage = (imageName: string) => {
  return `${ImageDomain}/images/AboutUsPage/${imageName}`;
};
export const getDistrbuterImage = (imageName: string) => {
  return `${ImageDomain}/images/Banners/${imageName}`;
};

export const getHomePageImage = (imageName: string) => {
  return `${ImageDomain}/images/HomePage/${imageName}`;
};
export const getBpmDetailImage = (imageName: string) => {
  return `${ImageDomain}/images/BPMDetails/${imageName}`;
};
export const getBPMMeasurementsImage = (imageName: string) => {
  return `${ImageDomain}/images/BPMMeasurements/${imageName}`;
};
export const getBpmImage = (imageName: string) => {
  return `${ImageDomain}/images/BPMs/${imageName}`;
};
export const getLandingPageImage = (imageName: string) => {
  return `${ImageDomain}/images/LandingPage/${imageName}`;
};
export const getSupportPageImage = (imageName: string) => {
  return `${ImageDomain}/images/SupportPage/${imageName}`;
};
export const getSiteSettingsImage = (imageName: string) => {
  return `${ImageDomain}/images/SiteSettings/${imageName}`;
};
export const getCategoryImage = (imageName: string) => {
  return `${ImageDomain}/images/Categories/${imageName}`;
};
export const getProductCardImage = (imageName: string) => {
  return `${ImageDomain}/images/ProductCards/${imageName}`;
};
