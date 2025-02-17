export interface SiteSettings {
  siteTitle: string;
  siteName: string;
  phoneNumber: string;
  telePhone: string;
  address: string;
  locationUrl: string;
  languages: [string];
  ahgLogoName: string;
  americanLogoName: string;
  copyrightText: string;
  instagramLink: string;
  linkdinLink: string;
  twitterLink: string;
  facebookLink: string;
  youTubeLink: string;
  instagramLogoName: string;
  linkdinLogoName: string;
  twitterLogoName: string;
  facebookLogoName: string;
  youTubeLogoName: string;
}
export interface FooterItem {
  title: string;
  url?:string | null;
  links: { displayTitle: string; url: string }[];
}
