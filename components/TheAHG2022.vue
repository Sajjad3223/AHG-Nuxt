<template>
  <div class="w-full bg-blackColor py-[30px]  md:py-[80px] flex items-center justify-center relative">
    <div class="flex flex-col-reverse gap-10 lg:gap-5 lg:flex-row items-center container mx-auto  lg:mt-0  text-white">
      <div class="flex flex-col  origin-center md:origin-left  w-full lg:w-[85%]">
        <h5 class="section-size2 title font-bold">
          {{ title }}
        </h5>
        <p class="text-mob md:!font-normal mt-2">
          {{ subTitle }}
        </p>
        <h6 class="text-mob md:text-[40px] mt-3 md:mt-12">
          {{ secondTitle }}
        </h6>
        <p class="!text-[19px] text-mob mt-3 md:mt-5 md:w-[60%] w-full">
          {{ description }}
        </p>
      </div>
      <img :src="qrCode" alt="qrCode" class="w-[40%] scale-100 md:w-[15%] md:scale-125 mt-0 lg:mt-[80px] ">
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
  },
  qrCode:{
    default:'/images/qrcode.png'
  }
})
</script>

<style></style>