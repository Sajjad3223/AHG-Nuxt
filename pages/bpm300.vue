<template>
  <div v-if="data?.data && pending == false">
    <div class="relative w-full grid place-items-center md:min-h-[90vh] bpm-banner"
      :style="{ 'background-image': `url(${getBpmImage(data.data.backgroundImageName)})` }">
      <div class="container mx-auto relative flex flex-col justify-center pt-[5vh]  pb-12 ">
        <div class="bg-blackColor rounded-[25px] p-8 md:py-12 md:px-16 md:w-[74%] text-white">
          <div class="flex items-center gap-2 text-[28px] md:text-[45px] font-bold">
            <span>AHG-300</span>
          </div>
          <span class="text-[25px] md:text-[47px]">{{ data.data.title }}</span>
          <div class="flex flex-col-reverse lg:flex-row  my-8 gap-8">
            <div class="flex flex-col flex-1 space-y-2 md:space-y-5   text-[19px]">
              <p class="leading-tight whitespace-pre-wrap">
                {{ data.data.description }}
              </p>

            </div>
            <img :src="getBpmImage(data.data.imageName)" :alt="data.data.title" class="w-1/2 md:w-[28%] md:h-full">
          </div>
          <AHGButton :to="data.data.buttonLink" color="white" class="text-black font-medium" px="3rem" is-show-more>
            {{ data.data.buttonTitle }}
          </AHGButton>
        </div>
      </div>
    </div>

    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[30px] md:!py-[80px] flex flex-col items-stretch">
        <h3 class="text-[50px] section-size1 mx-auto">
          {{ data.data.measurementTitle }}
        </h3>
        <div class="grid grid-cols-1 font-medium  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <div v-for="(item, index) in data.data.measurements" :key="index"
            class="flex items-center justify-center w-full rounded-xl bg-white text-blackColor py-2 gap-8">
            <img :src="getBPMMeasurementsImage(item.imageName)" :alt="item.title" class="max-w-[60px]" />
            <span class="text-[16px] text-mob">{{ item.title }}</span>
          </div>

        </div>

        <div class=" my-14">
          <div class="flex items-center font-bold gap-1">
            <span class="text-[35px]  section-size1">AHG-300</span>
          </div>
          <p class="text-[30px] section-size1">{{ data.data.detailTitle }}</p>
          <p class="text-[20px] mt-3 text-mob whitespace-pre-wrap">
            {{ data.data.detailShortDescription }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-5">
          <div v-for="item in items" :key="item.title" class="flex detail-item overflow-hidden flex-col-reverse md:flex-row md:gap-5
             items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col z-10 w-full md:w-[70%]">
              <span class="text-[22px] font-bold">{{ item.title }}</span>
              <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 md:gap-0 w-full">
                <ul class="text-[16px] details mt-1 font-medium text-black  ">
                  <li style="white-space: pre-wrap;" v-for="detail in item.details">
                      {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
            <img :src="item.image" :alt="item.title" class="img-shadow block p-image right-0 absolute z-1 h-full">
          </div>

        </div>

        <div class="w-full flex flex-col space-y-5 md:space-y-8 mt-16 relative">
          <h4 class="section-size1 md:text-[42px]">{{ data.data.detailSecondTitle }}</h4>
          <div class="flex flex-col-reverse md:flex-row gap-5">
            <p class="text-mob  text-[16px] leading-tight whitespace-pre-wrap">
              {{ data.data.detailSecondShortDescription }}
            </p>
            <img :src="getBpmImage(data.data.detailSecondImageName)" alt="bpm device" style="scale: 1.2;"
              class="w-[29%] max-w-[450px] mx-auto hidden md:block">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white py-[50px] md:py-[100px] relative">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1 w-full">
          <h6 class="section-size1 text-base font-bold">
            {{ data.data.specificationTitle }}
          </h6>
          <div class="grid sm:grid-cols-2 gap-4 md:gap-16 w-full">
            <div class="flex flex-col flex-wrap gap-2 w-[98%]">
              <template v-for="(item, index)  in [...data.data.specifications.slice(0, 5)]" :key="index">
                <div>
                  <p class=" text-[21px] font-bold">{{ item.title }}</p>
                  <p class="whitespace-pre-wrap text-mob">{{ item.description }}</p>
                </div>
                <hr v-if="index != 4" />
              </template>

            </div>
            <div class="flex flex-col flex-wrap gap-3">
              <template v-for="(item, index)  in [...data.data.specifications.slice(5)]" :key="index">
                <div>
                  <p class="text-[21px] font-bold">{{ item.title }}</p>
                  <p class="whitespace-pre-wrap">{{ item.description }}</p>
                </div>
                <hr v-if="index != ([...data.data.specifications.slice(5)].length - 1)" />
              </template>
            </div>
          </div>
        </div>
        <img src="/assets/images/ahg-300.png" alt="specifications" class="w-[50%] md:w-[25%] max-w-[450px] img-shadow">
      </div>
    </div>
    <AHGPackaging :title="data.data.bannerTitle" :description="data.data.bannerShortDescription" is-bpm
      :image="getBpmImage(data.data.bannerImageName)" />

    <AHGSupport color="black" manual-button :title="data.data.supportBannerTitle"
      :description="data.data.supportBannerShortDescription" :button-link="data.data.supportBannerFirstButtonLink"
      :button-text="data.data.supportBannerFirstButtonTitle" :manual-link="data.data.supportBannerSecondButtonLink"
      :manual-text="data.data.supportBannerSecondButtonTitle" />
  </div>
  <div v-else class="flex justify-center items-center my-5">
    <BaseLoading />
  </div>
</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGLogo from "~/components/AHGLogo.vue";
import AHGPackaging from "~/components/AHGPackaging.vue";
import { getBPM300PageData } from "~/services/product.service";
import type { Bpm300PageData } from "~/models/Entities/SupportPageData";
import type { ApiResponse } from "~/models/apiResponse";
import { getBpmDetailImage, getBpmImage, getBPMMeasurementsImage, getHomePageImage } from "~/utilities/ImageDirectories";
const utilStore = useUtilStore();
const nuxtApp = useNuxtApp();
const { data, pending } = await useAsyncData("bpm300", () => getBPM300PageData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data as ApiResponse<Bpm300PageData>;
  },
  deep: false
});
const items: Ref<{ title: string, image: string, details: string[] }[]> = ref([]);
if (data.value?.data?.details.length ?? 0 > 0) {
  items.value = []
  data.value?.data?.details.forEach(f => {
    items.value.push({
      title: f.title,
      image: getBpmDetailImage(f.imageName),
      details: f.description.split('\r\n')
    })
  })
}
useHead({
  title: 'Blood Pressure Monitor'
})
onMounted(() => {
  if (items.value.length == 0) {
    data.value?.data?.details.forEach(f => {
      items.value.push({
        title: f.title,
        image: getBpmDetailImage(f.imageName),
        details: f.description.split('\r\n')
      })
    })
  }
})
</script>

<style scoped lang="scss">
.img-shadow {
  /* filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5)); */
}

@media screen and (max-width:768px) {
  .detail-item {
    padding-top: 0 !important;
  }
}

.bpm-banner {
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: cover;
}

.details li {
  position: relative;
}

.details li::after {
  width: 6px;
  height: 6px;
  position: absolute;
  left: 0;
  top: 9px;
  content: " ";
  background: black;
  border-radius: 50%;
}

@media screen and (max-width:768px) {
  .p-image {
    display: block;
    position: static;
    scale: 1 !important;
  }

  .pre {
    white-space: wrap !important;
  }
}

@media only screen and (max-width:768px) {
  .bpm-banner {
    background-size: 250vw;
  }
}

hr {
  border-color: rgba(0, 0, 0, 0.1) !important;
}
</style>