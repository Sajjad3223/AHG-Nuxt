import { defineStore } from "pinia";
import type { SiteSettings } from "~/models/homeDataDto";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const useUtilStore = defineStore("utils", () => {
  const siteSettings: Ref<SiteSettings | null> = ref(null);
  const footerLinks = ref([]);
  const initData = async () => {
    var set = await FetchApi<SiteSettings>("/home/GetSiteSettings");
    if (set.isSuccess) {
      siteSettings.value = set.data ?? null;
    }
  };
  return { siteSettings, initData, footerLinks };
});
