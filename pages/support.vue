<template>
  <div v-if="data?.data && pending == false">

    <Head>
      <Title>Support</Title>
    </Head>
    <div class="relative w-full flex items-end py-5 md:p-0 md:items-center h-[60vh] lg:h-[90vh]"
      :style="{ 'background': `url(${getSupportPageImage(data.data.imageName)})` }"
      style="background-size: cover;background-position: 80% 50%">
      <div class="container mx-auto relative flex flex-col justify-center">
        <p class="text-3xl font-bold text-black leading-[1] md:max-w-[50%]"
          style="text-shadow: 2px 2px 5px rgba(255,255,255,0.4)">
          {{ data?.data?.title }}
        </p>
        <p class="text-[32px] mt-8 whitespace-pre-wrap">
          {{ data?.data?.shortDescription.split('\r\n')[0].trim() }}
        </p>
        <p class="text-[24px] mt-4 md:max-w-[50%] whitespace-pre-line">
          {{ data?.data?.shortDescription.replace(data?.data?.shortDescription.split('\r\n')[0], '').trim() }}
        </p>
      </div>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[80px] flex flex-col items-stretch">
        <p class="text-[20px] md:text-[25px]">
          {{ data?.data?.categorySectionShortDescription }}
        </p>
        <p class="mt-5  text-base font-bold">
          {{ data?.data?.categorySectionTitle }}
        </p>
        <div class="flex items-center flex-wrap gap-12 lg:gap-24 justify-center mt-20">
          <nuxt-link :to="item.link ?? '#'" class="flex flex-col space-y-5" v-for="item in categories?.data">
            <img :src="getCategoryImage(item.imageName)" :alt="item.title" class="h-[120px] lg:h-[160px]">
            <span class="text-small">{{ item.title }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="bg-lightColor py-[50px] relative">
      <div class="container mx-auto flex flex-col items-center">
        <h2 class="font-bold text-[30px] md:text-[70px]">
          {{ data?.data?.catalogSectionTitle }}
        </h2>
        <p class="text-base ">
          {{ data?.data?.catalogSectionShortDescription }}
        </p>
        <div class="flex items-stretch flex-wrap justify-between gap-5 mt-16 relative">
          <div class="flex-1 bg-white img-shadow rounded-[40px] p-8">
            <h4 class="text-title">Blood Glucose Monitor</h4>
            <h5 class="text-title font-bold ">AHG-2022</h5>
            <img src="~/assets/images/ahg-2022.png" alt="ahg 2022" class="my-6 h-[250px] mx-auto">
            <BaseAHGButton target="_blank" to="/files/landing/AHG-2022-Catalogue.pdf" color="black" is-show-more
              class="ml-auto mt-auto">
              Download
            </BaseAHGButton>
          </div>
          <div class="flex-1 bg-white img-shadow rounded-[40px] p-8">
            <h4 class="text-title">Blood Glucose Monitor</h4>
            <h5 class="text-title font-bold">AHG-2285</h5>
            <img src="~/assets/images/ahg-2285.png" alt="ahg 2285" class="my-6 h-[250px] mx-auto">
            <BaseAHGButton target="_blank" to="/files/landing/AHG-2285-Catalogue.pdf" color="black" is-show-more
              class="ml-auto mt-auto">
              Download
            </BaseAHGButton>
          </div>
          <div class="flex-1 bg-white flex flex-col img-shadow rounded-[40px] p-8">
            <h4 class="text-title text-nowrap">Blood Pressure Monitor</h4>
            <h5 class="text-title font-bold">AHG-300</h5>
            <img src="~/assets/images/ahg-300.png" alt="ahg 300" class="mx-auto my-6 h-[250px] w-fit">
            <BaseAHGButton target="_blank" to="/files/landing/AHG-300-Catalogue.pdf" color="black" is-show-more
              class="ml-auto">
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
      <div class="container flex py-[100px] flex-col items-center mx-auto">
        <h2 class="text-2xl font-bold">
          {{ data?.data?.instructionSectionTitle }}
        </h2>
        <p class="text-base mt-12">
          {{ data?.data?.instructionSectionShortDescription }}
        </p>
        <ul class="mt-20 w-full button-links flex flex-col space-y-5 relative">
          <li v-for="item in items" :key="item.title" class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor">
            <h6 class="text-lg">{{ item.title }}</h6>
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
import type { Category } from '~/models/Entities/CategoryData';
import type { InstructionData, SupportPageData } from '~/models/Entities/SupportPageData';
import { getInstructions, getSupportPageData } from '~/services/pages.service';
import { getCategoryData } from '~/services/product.service';
import { ImageDomain } from '~/utilities/api.config';
import { getCategoryImage, getLandingPageImage, getSupportPageImage } from '~/utilities/ImageDirectories';

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

<style scoped>
.img-shadow {
  filter: drop-shadow(6px 5px 5px rgba(0, 0, 0, 0.3));
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