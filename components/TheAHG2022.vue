<template>
  <div class="w-full bg-blackColor py-[30px]  md:py-[80px] flex items-center justify-center relative">
    <div class="flex flex-col-reverse gap-5 lg:flex-row items-center container mx-auto mt-12 lg:mt-0  text-white">
      <div class="flex flex-col  origin-center md:origin-left  w-full md:w-[85%]">
        <h5 class="title font-bold">
          {{ title }}
        </h5>
        <p class="text-title !font-normal mt-2">
          {{ subTitle }}
        </p>
        <h6 class="text-[20px] md:text-[40px] mt-12">
          {{ secondTitle }}
        </h6>
        <p class="!text-[19px] mt-5 md:w-[60%] w-full">
          {{ description }}
        </p>
      </div>
      <img src="~/assets/images/qrcode.png" alt="qrCode" class="w-[40%] md:w-[15%] mt-0 md:mt-[80px] ">
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    default: "AHG-2022 Diabetes Management App"
  },
  subTitle: {
    default: "Take control of your health with effective blood glucose management."
  },
  secondTitle: {
    default: " SHARE YOUR HEALTH DATA WITH YOUR DOCTOR"
  },
  description: {
    default: `Track and analyze your glucose levels to optimize diabetes
          management.Our app empowers you to elevate your check- up
          experience by easily sharing a comprehensive health journal with
          your healthcare professionals`
  }
})
</script>

<style></style>