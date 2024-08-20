<template>
  <div class="flex contact flex-col" v-if="data?.data && pending == false">
    <Head>
      <Title>Contact us</Title>
    </Head>
    <div
      class="w-full bg-blackColor flex items-baseline pt-5 md:!pt-0 md:items-center justify-center md:min-h-[90vh] text-white">
      <div class="flex flex-col lg:flex-row gap-5 items-center container mx-auto">
        <div class="flex flex-col  lg:w-1/2 xl:w-[62%]">
          <h1 class="text-2xl font-bold leading-[1]" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
            {{ data.data.title }}
          </h1>
          <p class="text-[20px] md:text-[31px] text-justify my-10 leading-tight" style="white-space: pre-wrap;">
            {{ data.data.description }}
          </p>
        </div>
        <img :src="`${getContactUsImage(data.data.imageName)}`" alt="world"
          class="img-shadow lg:absolute -translate-y-16 right-0 max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[45vw] origin-right" />
      </div>
    </div>

    <div class="w-full font-bold text-xl h-[100px] bg-lightColor text-blackColor flex items-center justify-center">
      {{ data.data.contactSectionTitle }}
    </div>
    <div class="bg-blackColor py-[100px] flex justify-center items-center">
      <div class="flex flex-col container mx-auto text-white w-[75%]">
        <ContactForm :contact-type="MessageType.getInTouch" />
      </div>
    </div>

    <div class="w-full font-bold text-xl h-[100px] bg-lightColor text-blackColor flex items-center justify-center">
      {{ data?.data?.addressSectionTitle }}
    </div>

    <div class="bg-blackColor py-[100px] flex justify-center items-center">
      <div class="flex flex-col container mx-auto text-white space-y-5 text-base">
        <p>
          <b>{{ data?.data?.addressTitle }}</b> <br>
          {{ data?.data?.address }}
        </p>
        <p>
          Email: {{ data?.data?.email }} <br>
          Tel: {{ data?.data?.tel }}
        </p>
      </div>
    </div>




  </div>
  <div v-else class="flex justify-center items-center my-5">
    <BaseLoading />
  </div>
</template>

<script setup lang="ts">
import { MessageType } from '~/models/MessageType';
import { getContactUsData } from '~/services/home.service';
import { getContactUsImage } from '~/utilities/ImageDirectories';
const nuxtApp = useNuxtApp();
const { data, pending } = await useAsyncData("contact", () => getContactUsData(), {
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

<style>
.contact .img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}

.contact form label {
  font-weight: 600;
}
</style>