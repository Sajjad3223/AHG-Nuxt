import type { AboutPageData } from "~/models/Entities/AboutPageData";
import type { CatalogData } from "~/models/Entities/CategoryData";
import type { ContactUsPageData } from "~/models/Entities/ContactUs";
import type { HomePageData } from "~/models/Entities/HomePageData";
import type { MessageType } from "~/models/MessageType";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const getHomePageData = () => {
  return FetchApi<HomePageData>("/Home");
};

export const getContactUsData = () => {
  return FetchApi<ContactUsPageData>("/Home/GetContactUsData");
};
export const getAboutPageData = () => {
  return FetchApi<AboutPageData>("/Home/GetAboutUsData");
};
export const SendContactMessage = (data: {
  company: string;
  email: string;
  callPhone: string;
  workPhone: string;
  fullName: string;
  messageBody: string;
  type: MessageType;
  country: string;
  city: string;
  workAdress: string;
}) => {
  var formData = new FormData();

  if (data.email) {
    formData.append("Company", data.company);
  }

  if (data.email) {
    formData.append("Email", data.email);
  }
  formData.append("CallPhone", data.callPhone);
  formData.append("FullName", data.fullName);
  formData.append("MessageBody", data.messageBody);
  formData.append("MessageType", data.type);

  if (data.workPhone) {
    formData.append("WorkPhone", data.workPhone);
  }
  if (data.country) {
    formData.append("Country", data.country);
  }
  if (data.workPhone) {
    formData.append("City", data.city);
  }
  if (data.workPhone) {
    formData.append("WorkPhone", data.workPhone);
  }
  if (data.workAdress) {
    formData.append("WorkAdress", data.workAdress);
  }
  return FetchApi("/contactMessage", {
    method: "POST",
    body: formData,
  });
};
export const getCataloguesData = () => {
  return FetchApi<CatalogData[]>("/Home/GetCatalogues");
};
