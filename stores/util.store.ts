import { defineStore } from "pinia";
import type { ProductCard } from "~/models/Entities/CategoryData";
import type { FooterItem, SiteSettings } from "~/models/Entities/SiteSettings";
import { FetchApi } from "~/utilities/CustomApiFetch";

export const useUtilStore = defineStore("utils", () => {
  const siteSettings: Ref<SiteSettings | null> = ref(null);
  const footerLinks: Ref<FooterItem[]> = ref([]);
  const headerLinks: Ref<FooterItem[]> = ref([]);
  const products: Ref<ProductCard[]> = ref([]);
  const initData = async () => {
    var set = await FetchApi<SiteSettings>("/home/GetSiteSettings");
    if (set.isSuccess) {
      siteSettings.value = set.data ?? null;
    }
    const footerItmes = await FetchApi<FooterItem[]>("/home/GetFooterLinks");
    const headerItems = await FetchApi<FooterItem[]>("/home/GetHeaderLinks");
    footerLinks.value = footerItmes.data ?? [];
    headerLinks.value = headerItems.data ?? [];
  };
  return { siteSettings, initData, footerLinks,headerLinks, products };
});
