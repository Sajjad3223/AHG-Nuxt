<template>
  <div v-if="data?.data && pending == false">

    <Head>
      <Title>Support</Title>
    </Head>
    <div class="relative head w-full flex items-end py-5 md:p-0 md:items-center h-[60vh] lg:h-[90vh]"
      :style="{ 'background': `url(${getSupportPageImage(data.data.imageName)})` }"
      style="background-size: cover;background-position: 80% 50%">
      <div class="container mx-auto relative flex flex-col justify-center">
        <p class="text-[38px] md:text-[128px] font-bold text-black leading-[1] md:max-w-[50%]">
          {{ data?.data?.title }}
        </p>
        <p class="text-[32px] section-size2  mt-3 md:mt-8 whitespace-pre-wrap">
          {{ data?.data?.shortDescription.split('\r\n')[0].trim() }}
        </p>
        <p class="text-[24px] text-mob mt-1 md:mt-4 md:max-w-[50%] md:whitespace-pre-line">
          {{ data?.data?.shortDescription.replace(data?.data?.shortDescription.split('\r\n')[0], '').trim() }}
        </p>
      </div>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[30px] md:py-[80px] flex flex-col items-stretch">
        <p class="text-mob md:text-[25px]">
          {{ data?.data?.categorySectionShortDescription }}
        </p>
        <p class="mt-5  text-mob text-base font-bold">
          {{ data?.data?.categorySectionTitle }}
        </p>
        <div class="flex items-center flex-wrap gap-10 lg:gap-24 justify-center mt-10 md:mt-20">
          <nuxt-link :to="item.link ?? '#'" class="flex flex-col space-y-5" v-for="item in categories?.data">
            <img :src="getCategoryImage(item.imageName)" :alt="item.title" class="h-[120px] lg:h-[160px]">
            <span class="md:text-small text-mob">{{ item.title }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="bg-lightColor py-[50px] relative">
      <div class="container mx-auto flex flex-col items-center">
        <h2 class="font-bold text-[30px] md:text-[70px]">
          {{ data?.data?.catalogSectionTitle }}
        </h2>
        <p class="text-base text-mob text-center ">
          {{ data?.data?.catalogSectionShortDescription }}
        </p>
        <div class="flex items-stretch flex-wrap justify-between gap-5 mt-6 md:mt-16 relative">
          <div class="flex-1 bg-white flex flex-col hover:shadow-lg transition-all rounded-[40px] p-8"
            v-for="item in catalogues?.data">
            <h4 class="text-title text-nowrap">{{ item.title.split("AHG")[0] }}</h4>
            <h5 class="text-title font-bold " v-if="item.title.toLowerCase().split('ahg')[1]">AHG{{
              item.title.toLowerCase().split("ahg")[1].toUpperCase() }}
            </h5>
            <img :src="getCatalogImage(item.imageName)" :alt="item.title" class="my-6 h-[250px] mx-auto">
            <BaseAHGButton target="_blank" :to="getCatalogFile(item.fileName)" color="black" is-show-more
              class="ml-auto mt-auto">
              Download
            </BaseAHGButton>
          </div>


        </div>
      </div>
    </div>

    <TheAHG2022 :title="data?.data?.appBannerFirstTitle" :sub-title="data?.data?.appBannerFirstShortDescription"
      :description="data?.data?.appBannerSecondShortDescription" :second-title="data?.data?.appBannerSecondTitle"
      :qr-code="getSupportPageImage(data?.data?.appBannerQRImageName ?? '')" />

    <!-- Download Manual -->
    <div class="w-full bg-white flex items-center justify-center">
      <div class="container flex py-[50px] md:py-[100px] flex-col items-center mx-auto">
        <h2 class="text-2xl font-bold">
          {{ data?.data?.instructionSectionTitle }}
        </h2>
        <p class="text-base text-mob mt-5 md:mt-12 text-center">
          {{ data?.data?.instructionSectionShortDescription }}
        </p>
        <ul class="mt-6 md:mt-20 w-full button-links flex flex-col space-y-5 relative">
          <li v-for="item in items" :key="item.title" class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor">
            <h6 class="text-lg section-size2">{{ item.title }}</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="col-span-full lg:col-span-1 text-sm self-center">Instruction Manual</span>
              <div class="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                <template v-for="detail in item.instructionItems">
                  <a v-if="detail.fileName" target="_blank"
                    :href="`${ImageDomain}/images/InstructionPage/${detail.fileName}`"
                    class="bg-white w-full text-xs rounded-lg text-center py-4">{{ detail.title }}</a>
                  <button v-else disabled class="bg-white w-full text-xs rounded-lg text-center py-4">{{ detail.title
                    }}</button>
                </template>
              </div>
            </div>
            <hr class="hidden lg:block border-blackColor my-5">
          </li>

        </ul>
      </div>
    </div>


    <div class="w-full bg-lightColor  py-12 md:py-[80px] flex items-center justify-center">
      <div class="container flex flex-col space-y-4 items-center text-center mx-auto">
        <span class="title">Didn't find what you need?</span>
        <p class="text-[20px] md:text-[24px] !mt-0"> If you can't find what you're looking for, feel free to contact us
          for
          support.</p>
        <div class="flex items-center justify-center gap-4 !mt-8 w-full">
          <BaseAHGButton to="/contact-us" color="black" px="42px" class="max-[768px]:!w-full">
            Contact Us
          </BaseAHGButton>
        </div>
      </div>
    </div>

    <AHGDistribution :title="data.data.distributionBannerTitle"
      :description="data.data.distributionBannerShortDescription" :button-link="data.data.distributionBannerButtonLink"
      :button-text="data.data.distributionBannerButtonTitle" />

    <div class="w-full bg-lightColor  py-12 md:py-[80px] flex items-center   justify-center">
      <div class="container flex flex-col space-y-4 text-center items-center mx-auto">
        <span class="title  text-center">Request Repair & Warranty</span>
        <span class="text-[20px]  md:text-[24px] !mt-0">Please let us know if you had any issue with our devices.</span>
        <div class="flex items-center justify-center gap-4 !mt-3 md:!mt-8 w-full">
          <BaseAHGButton to="/contact-us" color="black" px="42px" class="max-[768px]:!w-full">
            Contact Us
          </BaseAHGButton>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center my-5">
    <BaseLoading />
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse } from '~/models/apiResponse';
import type { CatalogData, Category } from '~/models/Entities/CategoryData';
import type { InstructionData, SupportPageData } from '~/models/Entities/SupportPageData';
import { getCataloguesData } from '~/services/home.service';
import { getInstructions, getSupportPageData } from '~/services/pages.service';
import { getCategoryData } from '~/services/product.service';
import { ImageDomain } from '~/utilities/api.config';
import { getCatalogFile, getCatalogImage, getCategoryImage, getLandingPageImage, getSupportPageImage } from '~/utilities/ImageDirectories';

const nuxtApp = useNuxtApp();
const { data, pending } = await useAsyncData("support", () => getSupportPageData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data as ApiResponse<SupportPageData>;
  },
  deep: false
});
const { data: categories } = await useAsyncData("categories", () => getCategoryData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data as ApiResponse<Category[]>;
  },
  deep: false
});
const { data: catalogues } = await useAsyncData("catalougs", () => getCataloguesData(), {
  getCachedData(key) {
    const data = nuxtApp.payload?.data[key]
    if (!data) {
      return;
    }
    return data as ApiResponse<CatalogData[]>;
  },
  deep: false
});
const items: Ref<InstructionData[]> = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  var res = await getInstructions();
  if (res.isSuccess) {
    items.value = res.data ?? [];
  }
  loading.value = false;

})
</script>

<style scoped lang="scss">
.img-shadow {
  /* filter: drop-shadow(6px 5px 5px rgba(0, 0, 0, 0.3)); */

}

@media screen and (max-width:768px) {
  .head {
    height: fit-content !important;
    @apply py-10;

    .container {
      z-index: 3;
    }

    p {
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

.col-span-full button,
a {
  font-weight: 500;
  @apply text-[17px] transition-all hover:opacity-70
}

.button-links .bg-white {
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.08);
}
</style>