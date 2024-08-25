<template>
  <div v-if="data?.data && pending == false">

    <Head>
      <Title>{{ data.data?.title }}</Title>
    </Head>
    <div class="flex flex-col">
      <div class="w-full bg-blackColor flex items-center pt-5
       md:pt-0 md:items-center justify-center h-[70svh] md:h-[90vh]  pb-0 text-white">
        <div class="flex flex-col gap-5 lg:gap-0 container mx-auto relative">
          <span class="text-small">{{ data.data?.secondTitle }}</span>
          <h1 class="text-[30px] md:text-[52px] font-bold lg:my-5 leading-tight text-left md:  lg:max-w-[70%]
            md:whitespace-pre-wrap" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
            {{ data.data.title }}
          </h1>
          <span class="text-[22px]  leading-tight  lg:max-w-[60%] xl:max-w-[50%]  
            min-[1618px]:!max-w-[50%] min-[1618px]:text-[27px]">
            {{ data.data?.shortDescription }}
          </span>
          <img :src="getLandingPageImage(data.data.imageName)" alt="Landing Banner"
            class="landing-banner lg:absolute  img-shadow w-[50vw] md:w-[35vw] self-center max-w-[600px]" />
        </div>
      </div>
      <div class="bg-lightColor py-[100px] w-full flex items-center justify-center">
        <div class="flex flex-col mx-auto container">
          <h4 class="self-center font-bold text-xl">
            {{ data.data.chooseTitle }}
          </h4>
          <div class="w-full flex flex-col mt-[80px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center gap-y-8 gap-x-28">
              <div v-for="(item, index) in data.data.chooses"
                :class="{ 'col-span-full max-w-[650px]': index == data.data.chooses.length - 1 }"
                class="bg-blackColor w-full py-8 rounded-[8px] text-[21px] md:text-[28px] px-2 text-center text-white grid place-items-center">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white py-[100px] flex justify-center items-center">
        <div class="flex flex-col container mx-auto">
          <h3 class="text-xl font-bold">{{ data.data.productBannerTitle }}</h3>
          <span class="text-[30px]  mt-2 md:mt-12">
            {{ data.data.productBannerShortDescription }}
          </span>
          <div class="mt-8 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3  w-full mx-auto">
            <div class="bg-lightColor rounded-[30px] px-5 py-10  flex flex-col  gap-4">
              <AHGLogo color="blackColor" width="96px" height="28px" />
              <span class="text-[22px]">Blood Pressure Monitors</span>
              <img src="~/assets/images/Blood-Pressure.png" alt="Blood Pressure"
                class="w-2/3 h-[250px] lg:w-full object-contain img-shadow">
              <div class="hidden lg:block">
                <BaseAHGButton to="/bpm300" class="text-tiny ml-auto mt-4" color="black" is-show-more
                  width="max-content" px="1rem" py="0.5rem" text-size="1.5rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
              <div class="lg:hidden">
                <BaseAHGButton to="/bpm300" class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%"
                  py="0.5rem" text-size="0.8rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
            </div>
            <div class="bg-lightColor rounded-[30px] px-5 py-10 flex flex-col  gap-4">
              <AHGLogo color="blackColor" width="96px" height="28px" />
              <span class="text-[22px]">Blood Glucose Monitors</span>
              <img src="~/assets/images/Blood-Glucose.png" alt="Blood Glucose"
                class="w-2/3 h-[250px] lg:w-full object-contain img-shadow">
              <div class="hidden lg:block">
                <BaseAHGButton to="/bgm2022" class="text-tiny ml-auto mt-4" color="black" is-show-more
                  width="max-content" px="1rem" py="0.5rem" text-size="1.5rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
              <div class="lg:hidden">
                <BaseAHGButton to="/bgm2022" class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%"
                  py="0.5rem" text-size="0.8rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
            </div>
            <div class="bg-lightColor rounded-[30px] px-5 py-10 flex flex-col  gap-4">
              <AHGLogo color="blackColor" width="96px" height="28px" />
              <span class="text-[22px]">Digital Body Scales</span>
              <img src="~/assets/images/Body-Scale.png" alt="Body Scale"
                class="w-2/3 lg:w-full h-[250px] object-contain img-shadow">
              <div class="hidden lg:block">
                <BaseAHGButton disabled class="text-tiny ml-auto mt-4" color="black" is-show-more width="max-content"
                  px="1rem" py="0.5rem" text-size="1.5rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
              <div class="lg:hidden">
                <BaseAHGButton disabled class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%"
                  py="0.5rem" text-size="0.8rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
            </div>
            <div class="bg-lightColor rounded-[30px] px-5 py-10 flex flex-col  gap-4">
              <AHGLogo color="blackColor" width="96px" height="28px" />
              <span class="text-[22px]">Digital Thermometer</span>
              <img src="~/assets/images/Thermometer.png" alt="Thermometer"
                class=" lg:w-full  h-[250px] object-contain img-shadow">
              <div class="hidden lg:block">
                <BaseAHGButton disabled class="text-tiny ml-auto mt-4" color="black" is-show-more width="max-content"
                  px="1rem" py="0.5rem" text-size="1.5rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
              <div class="lg:hidden">
                <BaseAHGButton disabled class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%"
                  py="0.5rem" text-size="0.8rem">
                  <span>Learn More</span>
                </BaseAHGButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AHGPackaging :title="data.data.thirdBannerTitle" :description="data.data.thirdBannerDescription"
        :short-description="data.data.thirdBannerShortDescription"
        :image="getLandingPageImage(data.data.thirdBannerIamgeName)" />
      <div class="w-full lg:min-h-[800px] py-[100px] flex items-center justify-center"
        :style="{ 'background': `url(${getLandingPageImage(data.data.fourthBannerIamgeName)})` }"
        style=" background-color: #1A1B1D; background-size: cover; background-repeat: no-repeat; background-position: 80% 50%">
        <div class="mx-auto container flex flex-col text-white">
          <h3 class="text-3xl font-bold leading-tight relative z-10 whitespace-pre-wrap"
            style="text-shadow: 5px 5px 5px rgba(0,0,0,0.4)">
            {{ data.data.fourthBannerTitle }}
          </h3>
          <span class="text-[20px] md:text-[31px] mt-5 whitespace-pre-wrap">
            {{ data.data.fourthBannerShortDescription }}

          </span>
        </div>
      </div>

      <AHGSupport manual-button :title="data.data.supportBannerTitle"
        :description="data.data.supportBannerShortDescription" :button-link="data.data.supportBannerFirstButtonLink"
        :button-text="data.data.supportBannerFirstButtonTitle" :manual-link="data.data.supportBannerSecondButtonLink"
        :manual-text="data.data.supportBannerSecondButtonTitle" />

      <AHGDistribution :title="data.data.distributionBannerTitle"
        :description="data.data.distributionBannerShortDescription"
        :button-link="data.data.distributionBannerButtonLink" :button-text="data.data.distributionBannerButtonTitle" />
    </div>
  </div>
  <div v-else class="flex justify-center items-center my-5">
    <BaseLoading />
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse } from '~/models/apiResponse';
import type { LandingPageData } from '~/models/Entities/LandingPageData';
import { getLandingPageData } from '~/services/pages.service';
import { getHomePageImage, getLandingPageImage } from '~/utilities/ImageDirectories';

const nuxtApp = useNuxtApp();
const { data, pending } = await useAsyncData("landing", () => getLandingPageData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data as ApiResponse<LandingPageData>;
  },
  deep: false
});
</script>
<style scoped>
.img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}

.landing-banner {
  right: 9%;
  transform: translate(9%, -5%);
}
</style>
