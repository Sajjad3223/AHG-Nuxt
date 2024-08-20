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
