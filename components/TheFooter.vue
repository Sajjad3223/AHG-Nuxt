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
              <AHGLogo width="60px" v-if="item.title == 'Healthcare'" />
              <span class="text-xs font-bold lg:text-[24px]">{{ item.title }}</span>
            </div>
            <hr>
            <div class="flex !mt-3 flex-col space-y-2 text-[14px] lg:text-base">
              <NuxtLink v-for="link in item.links" :to="link.url">{{ link.displayTitle }}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-span-full ml-auto relative flex items-center">
          <select name="" id="" class="pl-6 pr-24 py-3 appearance-none cursor-pointer rounded-lg border text-left">
            <option>English</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73"
            class="w-2 pointer-events-none text-borderColor rotate-90 absolute right-5">
            <polyline stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-width="1.5"
              points=".35 .36 11.16 10.97 .35 21.37" />
          </svg>
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

const utilStore = useUtilStore();
</script>
<style scoped>
hr {
  border-color: black;
}
</style>