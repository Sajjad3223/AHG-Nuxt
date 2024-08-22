import { defineStore } from "pinia";
import type { FooterItem, SiteSettings } from "~/models/Entities/SiteSettings";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const useUtilStore = defineStore("utils", () => {
  const siteSettings: Ref<SiteSettings | null> = ref(null);
  const footerLinks: Ref<FooterItem[]> = ref([]);
  const initData = async () => {
    var set = await FetchApi<SiteSettings>("/home/GetSiteSettings");
    if (set.isSuccess) {
      siteSettings.value = set.data ?? null;
    }
    var footerItmes = await FetchApi<FooterItem[]>("/home/GetFooterLinks");
    footerLinks.value = footerItmes.data ?? [];
  };
  return { siteSettings, initData, footerLinks };
});
