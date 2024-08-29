<template>
  <div>
    <footer class="pt-[90px] pb-5">
      <div class="container mx-auto flex flex-col">
        <div class="grid grid-cols-2 lg:flex flex-wrap justify-between gap-12 md:gap-y-10 lg:gap-12">
          <div class="flex flex-col items-start self-start lg:w-1/4">
            <img :src="getSiteSettingsImage(utilStore.siteSettings?.americanLogoName ?? '')" alt="logo"
              class="text-blackColor w-full" />
          </div>
          <div class="flex max-w-[210px] lg:w-1/4 flex-col space-y-4" v-for="item in utilStore.footerLinks">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold lg:text-[24px]">{{ item.title }}</span>
            </div>
            <hr>
            <div class="flex !mt-3 flex-col space-y-2 text-[14px] lg:text-base">
              <NuxtLink v-for="link in item.links" :to="link.url">{{ link.displayTitle }}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-span-full w-full md:!w-[300px] mt-2 ml-auto relative flex items-center">
          <GoogleTranslateSelect class="w-full" :languages="langs" default-language-code="en"
            default-page-language-code="en" :fetch-browser-language="false" trigger="click"
            @select="handleGoogleTranslateSelect" />

        </div>
      </div>
      <hr class="my-5">
      <div class="container mx-auto flex flex-col lg:flex-row gap-5 items-center justify-between">
        <span class="text-small">
          {{ utilStore.siteSettings?.copyrightText }}
        </span>
        <div class="flex items-center flex-wrap gap-4">
          <a v-if="utilStore.siteSettings?.instagramLogoName" :href="utilStore.siteSettings?.instagramLink"
            class="w-[60px] h-[60px] grid place-items-center rounded-[20px] bg-blackColor text-white">
            <img :src="getSiteSettingsImage(utilStore.siteSettings?.instagramLogoName)" alt="instagram" />
          </a>
          <a v-if="utilStore.siteSettings?.linkdinLogoName" :href="utilStore.siteSettings?.linkdinLink"
            class="w-[60px] h-[60px] grid place-items-center rounded-[20px] bg-blackColor text-white">
            <img :src="getSiteSettingsImage(utilStore.siteSettings?.linkdinLogoName)" alt="instagram" />
          </a>
          <a v-if="utilStore.siteSettings?.twitterLogoName" :href="utilStore.siteSettings?.twitterLink"
            class="w-[60px] h-[60px] grid place-items-center rounded-[20px] bg-blackColor text-white">
            <img :src="getSiteSettingsImage(utilStore.siteSettings?.twitterLogoName)" alt="instagram" />
          </a>
          <a v-if="utilStore.siteSettings?.facebookLogoName" :href="utilStore.siteSettings?.facebookLink"
            class="w-[60px] h-[60px] grid place-items-center rounded-[20px] bg-blackColor text-white">
            <img :src="getSiteSettingsImage(utilStore.siteSettings?.facebookLogoName)" alt="instagram" />
          </a>
          <a v-if="utilStore.siteSettings?.youTubeLogoName" :href="utilStore.siteSettings?.youTubeLink"
            class="w-[60px] h-[60px] grid place-items-center rounded-[20px] bg-blackColor text-white">
            <img :src="getSiteSettingsImage(utilStore.siteSettings?.youTubeLogoName)" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { getSiteSettingsImage } from '~/utilities/ImageDirectories';
//@ts-ignore
import GoogleTranslateSelect from '@google-translate-select/vue3';
const handleGoogleTranslateSelect = (language: any) => {
  console.log(language)
}
const langs = [{
  code: 'en',
  name: 'English',
  cname: '英语',
  ename: 'English',
}, {
  code: 'fr',
  name: 'Français',
  cname: '法语',
  ename: 'French',
}];

// const langs = [{
//   code: 'en',
//   name: 'English',
//   cname: '英语',
//   ename: 'English',
// }];
const utilStore = useUtilStore();
</script>
<style scoped>
hr {
  border-color: black;
}
</style>