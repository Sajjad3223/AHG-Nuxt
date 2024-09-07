<template>
  <div class="flex flex-col" v-if="data?.data && pending == false">
    <div
      class="w-full bg-blackColor flex items-baseline md:items-center justify-center pb-16 md:pb-0 md:min-h-[90vh] text-white">
      <div class="flex flex-col container mx-auto relative">
        <img :src="getDistrbuterImage(data.data.imageName)" alt="Earth"
          class="lg:absolute mt-5 lg:m-0 right-0 2xl:-right-[50px] -bottom-16 max-w-[600px] img-shadow" />
        <h1 class="text-[40px] text-left  md:text-[98px] md:  font-bold leading-[1.2]"
          style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
          {{ data.data.title }}
        </h1>
        <div class="md:w-[62%]">
          <p class="text-mob  md:text-[30px] mt-5 lg:mt-10 leading-tight">
            {{ data.data.shortDescription?.split('\r\n\r\n')[0] }}
          </p>
          <p class="text-mob mt-3 md:mt-5 md:text-[26px]">
            {{ data.data.shortDescription?.split('\r\n\r\n')[1] }}
          </p>
        </div>

      </div>
    </div>

    <div class="pb-[40px] md:py-[150px]">
      <div class="container mx-auto relative">
        <img src="../assets/images/world.png" alt="world" class="absolute w-[80%] -right-[7%] bottom-[0%] opacity-5" />
        <div class="flex max-[768px]:hidden flex-wrap items-center justify-center md:justify-between gap-5">

          <img class="w-[50vw] max-w-[300px]"
            :src="getSiteSettingsImage(utilStore.siteSettings?.americanLogoName ?? '')" alt="" />
          <p class="text-mob md:text-[30px]  leading-[32px] whitespace-pre-wrap">
            {{ data.data.subDescription }}
          </p>
        </div>
        <div class="mt-12 lg:mt-28 text-mob md:text-[25px] leading-[32px]  ">
          <p class="whitespace-pre-line">
            <b> AHG</b>
            {{ data.data.description }}
          </p>

        </div>
      </div>
    </div>

    <div class="bg-blackColor contact py-[50px] md:py-[100px] flex justify-center items-center">
      <div class="flex flex-col container mx-auto text-white  md:w-[80%]">
        <h3 class="text-[30px] md:text-[100px] min-[1614px]:text-[105px] text-center font-bold leading-tight"
          style="white-space: pre-wrap;">
          Join our<br />
          Distribution Network
        </h3>
        <ContactForm class="mt-12 md:mt-24" :contact-type="MessageType.distribution" />
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center my-5">
    <BaseLoading />
  </div>
</template>

<script setup lang="ts">
import { MessageType } from '~/models/MessageType';
import { getBecomeDistributorPageData } from '~/services/pages.service';
import { getDistrbuterImage, getSiteSettingsImage } from '~/utilities/ImageDirectories';

const utilStore = useUtilStore();
const nuxtApp = useNuxtApp();
const { data, pending } = await useAsyncData("becomeDistributor", () => getBecomeDistributorPageData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data;
  },
  deep: false
});
</script>

<style scoped>
.img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}

.contact form label {
  font-weight: bold;
}
</style>