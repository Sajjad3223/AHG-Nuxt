<template>
  <div v-if="data?.data && pending == false">
    <div class="relative w-full grid place-items-center py-8 lg:py-[150px] bg-blackColor text-white">
      <div class="flex flex-col container mx-auto">
        <div class="relative flex flex-col justify-center">
          <img loading="lazy" :src="getBgmImage(data.data.imageName)" :alt="data.data.title"
            class="mx-auto w-[70%] mb-5 block md:hidden" />
          <h1 class="text-[105px] font-bold leading-[1.1]">
            {{ data?.data?.title }}
          </h1>
          <div class="flex font-bold items-center ahg md:text-[45px] gap-2 lg:mt-5 mt-2">
            <p>AHG-2022</p>
          </div>
          <div class="flex items-center my-5 md:my-10 gap-10 lg:w-[65%]">
            <div class="flex flex-col space-y-4   text-[18px] leading-tight">
              <p>
                {{ data.data.shortDescription }}
              </p>
              <p class="w-[90%]">
                {{ data.data.description }}
              </p>
            </div>
          </div>
          <div class="flex items-end justify-center gap-2 w-2/5 relative lg:absolute -right-12 -bottom-6  lg:m-0">
            <img :src="getBgmImage(data.data.imageName)" :alt="data.data.title"
              class="max-h-[320px] b-banner lg:max-h-[420px] hidden md:block" />
          </div>
        </div>
        <div class="flex gap-2 w-full flex-wrap">
          <AHGButton :to="data.data.buttonLink" color="white" class="flex-grow md:grow-0 font-medium" width="200px"
            is-show-more>
            {{ data.data.buttonTitle }}
          </AHGButton>
          <AHGButton to="/bgm2285" color="white" class="font-medium flex-grow md:grow-0 min-w-fit" width="200px"
            is-show-more>
            Discover AHG-2285 Blood Glucose Monitor
          </AHGButton>
        </div>
      </div>
    </div>

    <div class="bg-white w-full">
      <div class="container mx-auto  flex flex-col items-stretch">
        <div class="my-8 md:my-14">
          <div class="flex items-center gap-1">
            <span class="section-size1 text-[45px] font-bold">AHG-2022</span>
          </div>
          <p class="section-size text-[36px] md:mb-3 mb-2">{{ data.data.detailTitle }}</p>
          <p class="text-mob text-[19.5px]">
            {{ data.data.detailShortDescription }}
          </p>
        </div>

        <div class="grid image-products lg:grid-cols-2 gap-5 pb-5">
          <div v-for="item in data.data.details" class="flex h-[180px] items-center justify-between w-full rounded-[20px] px-5 relative
             bg-lightColor drop-shadow-lg text-blackColor">
            <div class=" z-10 max-w-[70%]">
              <p class="section-size2 text-[24px] font-bold">{{ item.title }}</p>
              <p class="text-mob
               text-[18px] whitespace-pre-wrap">{{ item.description }}</p>
            </div>
            <img :src="getBgmDetailImage(item.imageName)" alt="Auto coding" class="img-shadow rounded-[20px] absolute top-0  
             right-0">
          </div>

        </div>

      </div>
    </div>
    <div class="bg-white py-[50px] md:py-[100px] relative">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="section-size1 text-lg font-bold">
            {{ data.data.specificationTitle }}
          </h6>
          <div class="grid grid-cols-2 gap-4 lg:gap-10 w-full">
            <div class="flex flex-col flex-wrap gap-3">
              <template v-for="(item, index) in [...data.data.specifications].splice(0, 8)" :key="index">
                <div class="flex flex-col gap-2">
                  <span class="text-[20px] md:text-[26px] font-bold">{{ item.title }}</span>
                  <span class="text-[17px]">{{ item.description }}</span>
                </div>
                <hr v-if="index != [...data.data.specifications].splice(0, 8).length - 1"
                  class="border-black opacity-70">
              </template>
            </div>
            <div class="flex flex-col flex-wrap gap-3">
              <template v-for="(item, index) in [...data.data.specifications].splice(8)" :key="index">
                <div class="flex flex-col gap-2">
                  <span class="text-[20px] md:text-[26px] font-bold">{{ item.title }}</span>
                  <span class="text-[17px]">{{ item.description }}</span>
                </div>
                <hr v-if="index != [...data.data.specifications].splice(8).length - 1" class="border-black opacity-70">
              </template>
            </div>
          </div>
        </div>
        <img :src="getBgmImage(data.data.specificationImageName)" alt="specifications"
          class="w-1/4 md:w-1/5 scale-110 max-w-[450px] ">
      </div>
    </div>

    <div class="bg-lightColor md:py-[80px] py-[20px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <div class="flex flex-col space-y-5 md:space-y-10 flex-1">
          <h6 class="text-mob text-[23.5px] ">
            {{ data.data.featureShortDescription }}
          </h6>

          <div class="">
            <p class="section-size text-[29px] font-bold">
              {{ data.data.featureTitle }}
            </p>
            <div class="grid pl-3 md:grid-cols-2  lg:gap-x-36 xl:w-5/6">
              <template v-for="item in data.data.features">
                <div v-if="item.title != 'Test Strips Specifications'"
                  class="flex flex-col border-b border-black  py-5">
                  <p class="text-[20px] font-bold">
                    {{ item.title }}
                  </p>
                  <ul class="list-disc ml-5 !mt-2">
                    <li class="text-mob text-[17px]">
                      {{ item.description }}
                    </li>
                  </ul>
                </div>
              </template>

            </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row gap-5"
            v-if="data.data.features.find(f => f.title == 'Test Strips Specifications')">
            <div class="min-w-fit flex-1 flex flex-col space-y-8">
              <span class="section-size text-[35px] font-bold">
                Test Strips Specifications
              </span>
              <ul class="list-disc ml-5 !mt-5 font-medium">
                <li class="text-[17px]" v-for="item in data.data.features.find(f => f.title == 'Test Strips Specifications')
                  ?.description.split('\r\n')">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="flex gap-6 mx-auto max-w-[90%] md:max-w-[50%] md:mr-[3rem]">
              <img :src="getBgmImage(data.data.featureImageName)" alt="Test Strips Specifications"
                class="self-center max-w-[700px] w-full">
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-[30px] md:py-[100px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <h2 class="section-size text-[50px] font-bold">
          {{ data.data.informationTitle }}
        </h2>
        <span class="text-mob text-[23.8px] mt-2">
          {{ data.data.informationShortDescription }}
        </span>

        <div class="flex items-center gap-4">
          <div class="flex-1 mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-6 gap-1">
            <div class="lg:col-span-4 border border-black rounded-[20px] flex 
            flex-col justify-center p-6">
              <div class="flex flex-col">
                <p class="text-[20px] font-bold">
                  Forward Spring Technology:
                </p>
                <ul class="list-disc ml-5">
                  <li class="text-mob text-[17px]">
                    Minimizes pain and vibration during use.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_10.png" alt=""
                class="mx-auto h-auto w-full md:w-[65%] md:h-[135px] self-center">
              <div class="flex flex-col self-end">
                <p class="text-[20px] font-bold">
                  Independent Lancet Holder
                </p>
                <ul class="list-disc ml-5">
                  <li class="text-mob text-[17px]">
                    Ensures precise, painless lancet insertion.
                  </li>
                </ul>
              </div>
            </div>
            <div class="border lg:col-span-2 border-black rounded-[20px] flex flex-col p-6">
              <div class="flex flex-col">
                <p class="text-[20px] font-bold">
                  Ready for use or not:
                </p>
                <ul class="list-disc ml-5">
                  <li class="text-mob text-[17px]">
                    warning lancet stored or not
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_11.png" alt="" class="mx-auto mt-2 self-center">
            </div>
            <div class="lg:col-span-3 border border-black rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <p class="text-[20px] font-bold">
                  Elastic Rail System:
                </p>
                <ul class="customLi">
                  <li class="text-mob text-[17px]">
                       Promotes smoother,<br />
                    less painful lancet penetration.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_12.png" alt=""
                class="mx-auto self-center max-w-[37%] max-h-[200px]">
            </div>
            <div class="lg:col-span-3 border border-black rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <p class="text-[20px] font-bold">
                  11 Depth Settings:
                </p>
                <ul class="customLi">
                  <li class="text-mob text-[17px]">
                       Customizable settings for user
                    comfort and needs.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_13.png" alt=" 11 Depth Settings:"
                class="mx-auto self-center max-w-[35%] max-h-[200px]">
            </div>
            <div
              class="lg:col-span-full border border-black rounded-[20px] flex flex-col items-start lg:flex-row lg:items-center p-6">
              <div class="flex flex-col lg:w-[70%]">
                <p class="text-[20px] font-bold">
                  2-in-1 Button & Lancet Ejector:
                </p>
                <ul class="customLi">
                  <li class="text-mob text-[18px]">
                       Streamlined design for easy cleaning, with a safety feature
                    preventing lancet ejection without proper cap twisting.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_14.png" alt="" class="mr-6 w-[44%]  self-center">
            </div>
          </div>
          <div class="w-[150px] hidden lg:flex items-center justify-center">
            <img src="~/assets/images/bgmPage/2022/img_7.png" alt="" class="w-[100px]">
          </div>
        </div>
      </div>
    </div>
    <TheAHG2022 :title="data?.data?.appBannerFirstTitle" :sub-title="data?.data?.appBannerFirstShortDescription"
      :description="data?.data?.appBannerSecondShortDescription" :second-title="data?.data?.appBannerSecondTitle"
      :qr-code="getBgmImage(data?.data?.appBannerQRImageName ?? '')" />

    <AHGPackaging :title="data.data.secondBannerTitle" :description="data.data.secondBannerDescription"
      :image="getBgmImage(data.data.secondBannerImageName)"
      :short-description="data.data.secondBannerShortDescription" />

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
import { getBgm2022PageData } from "~/services/product.service";
import type { Bgm2022Data } from "~/models/Entities/Bgm2022Data";
import type { ApiResponse } from "~/models/apiResponse";
import { getBgmDetailImage, getBgmImage, getBpmImage } from "~/utilities/ImageDirectories";
import { useUtilStore } from "~/stores/util.store";

const utilStore = useUtilStore();
const nuxtApp = useNuxtApp();
const { data, pending } = await useAsyncData("bgm2020", () => getBgm2022PageData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data as ApiResponse<Bgm2022Data>;
  },
  deep: false
});
useHead({
  title: 'BLOOD GLUCOSE MONITOR - 2022'
})
</script>

<style scoped lang="scss">
.img-shadow {
  /* filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5)); */
}

@media screen and (max-width:1020px) {
  img.b-banner {
    display: none !important;
  }

  h1 {
    font-size: 40px !important;
  }

  div.ahg {
    p {
      font-size: 30px !important;
    }
  }
}

@media screen and (max-width:768px) {
  .image-products {
    .flex {
      height: fit-content !important;
      @apply py-4 gap-4;

      div {
        max-width: 100% !important;
        width: 100%;
      }
    }

    img {
      display: none;
    }
  }
}

.image-products {
  overflow: hidden !important;
}

.image-products img {
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;

}

hr,
.border-b {
  border-color: rgba(0, 0, 0, 0.1) !important;
}
</style>