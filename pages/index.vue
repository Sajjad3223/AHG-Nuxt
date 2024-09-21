<template>
  <div v-if="data?.data && pending == false">

    <Head>
      <Title>{{ utilStore.siteSettings?.siteTitle }}</Title>
    </Head>
    <div class="relative w-full grid place-items-center ">
      <div class="relative flex justify-center lg:items-center w-full head  min-h-fit lg:min-h-[90vh] h-auto py-8">
        <img :src="getHomePageImage(data.data.imageName)"
          class="absolute object-cover  -z-[1] bottom-0 right-0 w-full h-full lg:h-auto lg:-bottom-5" alt="bg" />

        <div class="container content mx-auto">
          <p class="text-3xl  font-semibold  text-white leading-[1] lg:max-w-[70%] md:whitespace-pre-wrap"
            style="text-shadow: 4px 1px 4px rgb(0 0 0 / 30%)">
            {{ data.data.title.split('\r\n')[0] }} <br>
            <template v-if="data.data.title.split('\r\n')[1]">{{ data.data.title.split('\r\n')[1]
              }}<br></template>
            <label v-if="data.data.title.split('\r\n')[2]">
              {{ data.data.title.split('\r\n')[2].split(' ')[0] }} <span class="text-blackColor">{{
                data.data.title.split('\r\n')[2].split(' ')[1] }}</span>
            </label>

          </p>
          <p class="text-mob  md:text-[34px] mt-5 md:mt-7 max-w-full md:max-w-[70%] md:whitespace-pre-line">
            {{ data.data.shortDescription }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[8vw] flex flex-col ">
        <p class="text-mob md:!text-[27px] font-normal w-[98%] whitespace-pre-wrap">
          {{ data.data.description }}
        </p>
        <h2 class="mb-2 mt-8 md:mb-8 md:mt-12 section-size md:text-[45px] font-bold">
          {{ data.data.productsSectionTitle }}
        </h2>
        <div class="flex justify-center w-full" v-if="loading">
          <BaseLoading style="background: transparent;" />
        </div>
        <template v-else>
          <div class="border mt-5 border-white rounded-[30px]
           p-5 lg:p-12 flex flex-col-reverse gap-5 md:flex-row items-center justify-between relative"
            v-for="item in [...utilStore.products].splice(0, 2)">
            <div class="flex  flex-col space-y-5 lg:space-y-12">
              <h4 class="section-size2 text-lg text-nowrap uppercase">
                {{ item.title }}
              </h4>
              <p class="md:text-[20px] text-mob md:whitespace-pre-wrap">
                {{ item.shortDescription }}
              </p>
              <AHGButton :disabled="!item.buttonLink || item.buttonLink == '#'" :to="item.buttonLink ?? '#'"
                color="white" is-show-more class="show-more">
                {{ item.buttonTitle }}
              </AHGButton>
            </div>

            <div class=" flex-grow">
              <img :src="getProductCardImage(item.imageName)" class=" max-h-[270px] product-img  mx-auto"
                :alt="item.title" />
            </div>
          </div>
        </template>
        <h3 class="text-lg text-center my-[25px] md:my-[70px] md:whitespace-pre-wrap">
          {{ data.data.productsSectionDescription }}
        </h3>
        <div class="flex justify-center w-full" v-if="loading">
          <BaseLoading style="background: transparent;" />
        </div>
        <template v-else>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-7">
            <div class="border border-white h-full
             xl:max-h-[550px] rounded-[30px] flex flex-col items-stretch justify-between relative p-5
              lg:px-8 xl:py-12" v-for="item in [...utilStore.products].splice(2, 4)">
              <div class="flex flex-col">
                <h4 class="text-[22px] md:text-[42px] uppercase">
                  {{ item.title }}
                </h4>
                <div class="my-5 lg:mt-10 lg:mb-0 text-mob md:text-tiny max-w-[90%] font-light md:whitespace-pre-wrap">
                  {{ item.shortDescription }}
                </div>
              </div>
              <div class="flex flex-col-reverse xl:flex-row items-center relative xl:gap-5 flex-1">
                <AHGButton :disabled="!item.buttonLink || item.buttonLink == '#'" :to="item.buttonLink ?? '#'"
                  color="white" is-show-more class="w-1/2 show-more min-w-fit xl:-translate-y-8">
                  {{ item.buttonTitle }}
                </AHGButton>
                <div class="max-w-[284px] max-h-[250px] my-auto">
                  <img :src="getProductCardImage(item.imageName)" class="w-full  scale-75 xl:scale-110 "
                    :alt="item.title" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <AHGPackaging :title="data.data.bannerTitle" :description="data.data.bannerDescription"
      :short-description="data.data.bannerShortDescription" :image="getHomePageImage(data.data.bannerImageName)" />
    <AHGSupport :title="data.data.supportBannerTitle" :description="data.data.supportBannerShortDescription"
      :button-link="data.data.supportBannerFirstButtonLink" :button-text="data.data.supportBannerFirstButtonTitle" />
    <AHGDistribution :title="data.data.distributionBannerTitle"
      :description="data.data.distributionBannerShortDescription" :button-link="data.data.distributionBannerButtonLink"
      :button-text="data.data.distributionBannerButtonTitle" />
  </div>
  <div v-else class="flex justify-center items-center my-5">
    <BaseLoading />
  </div>
</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGPackaging from "~/components/AHGPackaging.vue";
import { getHomePageData } from "~/services/home.service";
import type { HomePageData } from "~/models/Entities/HomePageData";
import type { ApiResponse } from "~/models/apiResponse";
import { getHomePageImage, getProductCardImage, getSupportPageImage } from "~/utilities/ImageDirectories";
import { getProductCardsData } from "~/services/product.service";
import type { ProductCard } from "~/models/Entities/CategoryData";
const utilStore = useUtilStore();
const productCards: Ref<ProductCard[]> = ref([]);
const nuxtApp = useNuxtApp();
const loading = ref(false);
const { data, pending } = await useAsyncData("home-page", () => getHomePageData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data as ApiResponse<HomePageData>;
  },
  deep: false
});
onMounted(async () => {
  if (utilStore.products.length == 0) {
    loading.value = true;
    var res = await getProductCardsData();
    if (res.isSuccess) {
      utilStore.products = res.data ?? [];
    }
    loading.value = false;
  }
});
</script>

<style scoped>
@media screen and (max-width:768px) {
  .show-more {
    width: 100% !important;
    justify-content: space-between;
  }

  .product-img {
    width: 70% !important;
  }

  .head {
    .container {
      z-index: 3;
    }

    p,
    .text-blackColor {
      color: white;
    }

    &:after {
      content: " ";
      background: rgba(0, 0, 0, 0.699);
      z-index: 2;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
}


.img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
</style>