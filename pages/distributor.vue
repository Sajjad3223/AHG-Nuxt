<template>
  <div class="flex flex-col" v-if="data?.data && pending == false">
    <div
      class="w-full bg-blackColor flex items-baseline md:items-center justify-center pb-16 md:pb-0 md:h-[90vh] text-white">
      <div class="flex flex-col container mx-auto relative">
        <img :src="getDistrbuterImage(data.data.imageName)" alt="Earth"
          class="lg:absolute mt-5 lg:m-0 right-0 2xl:-right-[50px] -bottom-16 max-w-[600px] img-shadow" />
        <h1 class="text-[40px] text-left  md:text-[98px] md:  font-bold leading-[1.2]"
          style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
          {{ data.data.title }}
        </h1>
        <div class="md:w-[62%]">
          <p class="text-[20px]  md:text-[30px] mt-5 lg:mt-10 leading-tight">
            {{ data.data.shortDescription?.split('\r\n\r\n')[0] }}
          </p>
          <p class="text-[20px] mt-5 md:text-[26px]">
            {{ data.data.shortDescription?.split('\r\n\r\n')[1] }}
          </p>
        </div>

      </div>
    </div>

    <div class="pb-[40px] md:py-[150px]">
      <div class="container mx-auto relative">
        <img src="../assets/images/world.png" alt="world" class="absolute w-[80%] -right-[7%] bottom-[0%] opacity-5" />
        <div class="flex max-[768px]:hidden flex-wrap items-center justify-center md:justify-between gap-5">

          <img class="w-[50vw] max-w-[300px]" :src="getSiteSettingsImage(utilStore.siteSettings?.americanLogoName ?? '')"
            alt="" />
          <p class="text-[20px] md:text-[30px]  leading-[32px] whitespace-pre-wrap">
            {{ data.data.subDescription }}
          </p>
        </div>
        <div class="mt-12 lg:mt-28 text-[20px] md:text-[25px] leading-[32px]  ">
          <p class="whitespace-pre-line">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 19"
              class="w-[70px] mt-2 mr-2 text-blackColor float-left">
              <g id="Logo">
                <polygon fill="currentColor" stroke-width="0" points="20 0 16 0 0 19 5 19 16 6 20 6 20 0" />
                <polygon fill="currentColor" stroke-width="0"
                  points="9.59 15 13 11 16 11 16 7 20 7 20 11 24 11 24 15 20 15 20 19 16 19 16 15 9.59 15" />
                <polygon fill="currentColor" stroke-width="0"
                  points="40 8 40 0 44 0 44 19 40 19 40 11 32 11 32 19 28 19 28 0 32 0 32 8 40 8" />
                <path fill="currentColor" stroke-width="0"
                  d="M56.99,8v3h3.91c-.01.13-.03.24-.05.35-.05.25-.1.47-.16.68-.06.21-.13.39-.21.55-.03.05-.05.11-.08.16,0,.01-.01.03-.03.05-.08.17-.17.32-.27.47-.24.35-.54.67-.88.92-.1.07-.21.15-.31.21-.15.08-.29.15-.45.22-.21.09-.43.17-.67.23s-.47.11-.73.13c-.19.02-.39.03-.59.03s-.37,0-.55-.03c-.26-.03-.5-.07-.73-.13s-.45-.13-.67-.23c-.16-.07-.32-.15-.47-.23-.16-.09-.31-.21-.45-.32-.31-.25-.58-.55-.79-.89-.08-.12-.15-.25-.21-.38,0-.01-.01-.03-.03-.05-.05-.1-.1-.2-.14-.31-.07-.16-.12-.33-.17-.52-.05-.19-.1-.4-.14-.63s-.07-.48-.09-.75-.03-.56-.04-.87v-.16h0v-.02h0v-.31c0-.11,0-.21.01-.31,0-.21.03-.4.04-.59.03-.25.06-.49.11-.72.05-.23.1-.43.16-.63.01-.04.03-.07.04-.11.06-.17.13-.34.21-.5.19-.39.44-.75.74-1.07.11-.12.24-.23.37-.33.29-.23.61-.42.95-.56.12-.05.24-.09.36-.13.19-.06.39-.11.6-.15.21-.04.43-.06.66-.07.08,0,.16,0,.25,0,.15,0,.3,0,.45.02.23.02.43.05.64.09.2.04.4.1.59.17.07.02.13.05.19.07.15.07.31.14.45.22.32.18.61.41.87.67.13.13.24.28.35.43.08.11.15.22.22.33h4.32c-.05-.17-.1-.34-.16-.51-.39-1.12-1.01-2.14-1.82-3-.77-.81-1.7-1.43-2.72-1.85-1.06-.42-2.17-.64-3.38-.64s-2.32.22-3.36.64c-1.03.41-1.96,1.05-2.72,1.85-.81.86-1.43,1.89-1.82,3-.45,1.29-.59,2.65-.59,4.01,0,1.96.3,3.65,1.03,5.07.67,1.37,1.73,2.51,3.04,3.28,1.33.76,2.82,1.15,4.44,1.15s3.12-.4,4.44-1.15c1.31-.77,2.36-1.91,3.04-3.28.73-1.42,1.03-3.11,1.03-5.07,0-.5-.02-1-.07-1.5h-7.94Z" />
              </g>
            </svg>
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