<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGDistribution from "~/components/AHGDistribution.vue";
import AHGSupport from "~/components/AHGSupport.vue";
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full bg-blackColor flex items-center justify-center py-[200px] text-white">
      <div class="flex flex-col container mx-auto relative">
        <span class="text-[20px]">American Health Gate Solutions</span>
        <h1 class="text-[3.5vw] my-5 leading-tight" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
          Delivering healthcare products <br>
          that redefine your experience.
        </h1>
        <span class="text-[1.7vw] leading-tight">
          Backed by a decade of experience, AHG is dedicated <br>
          to developing the most advanced healthcare devices. <br>
          Partner with us to shape the future.
        </span>
        <img src="~/assets/images/landing-banner.png" alt="Landing Banner"
        class="absolute right-16 2xl:right-0 -bottom-1/2 scale-90 img-shadow max-w-[500px]"/>
      </div>
    </div>
    <div class="bg-lightColor py-[100px] w-full flex items-center justify-center">
      <div class="flex flex-col mx-auto container">
        <h4 class="self-center text-[64px]">
          Why choose American Health Gate?
        </h4>
        <div class="w-full flex flex-col mt-[3vw]">
          <div class="grid grid-cols-2 place-items-center gap-8">
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-[2vw] 2xl:text-[30px] text-white grid place-items-center">
              Cutting-edge healthcare devices
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-[2vw] 2xl:text-[30px] text-white grid place-items-center">
              Affordable luxury packaging
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-[2vw] 2xl:text-[30px] text-white grid place-items-center">
              Connected healthcare options
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-[2vw] 2xl:text-[30px] text-white grid place-items-center">
              Lifetime international warranty
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-[2vw] 2xl:text-[30px] col-span-full max-w-[650px] text-white grid place-items-center">
              Competitive pricing
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white pt-[160px] flex justify-center items-center">
      <div class="flex flex-col container mx-auto">
        <h3 class="text-[64px]">AHG Healthcare Products</h3>
        <span class="text-[36px] mt-12">
          Step into our ecosystem of smart devices, shedding light on your health and fostering lasting improvements.
        </span>
        <div class="mt-14 grid grid-cols-4 gap-3 -mx-20">
          <div class="bg-[#E1E9ED] rounded-[30px] px-10 py-14 flex flex-col min-h-[40vw]">
            <AHGLogo color="blackColor" />
            <span class="text-[1.6vw] 2xl:text-[26px] mt-8">Blood Pressure Monitors</span>
            <img src="~/assets/images/Blood-Pressure.png" alt="Blood Pressure" class="my-auto w-full max-w-[15vw] max-h-[15vw] object-contain img-shadow">
            <AHGButton class="ml-auto" color="black" is-show-more>
              <span>Learn More</span>
            </AHGButton>
          </div>
          <div class="bg-[#E1E9ED] rounded-[30px] px-10 py-14 flex flex-col min-h-[40vw]">
            <AHGLogo color="blackColor" />
            <span class="text-[1.6vw] 2xl:text-[26px] mt-8">Blood Glucose Monitors</span>
            <img src="~/assets/images/Blood-Glucose.png" alt="Blood Glucose" class="my-auto w-full max-w-[15vw] max-h-[15vw] object-contain img-shadow">
            <AHGButton class="ml-auto" color="black" is-show-more>
              <span>Learn More</span>
            </AHGButton>
          </div>
          <div class="bg-[#E1E9ED] rounded-[30px] px-10 py-14 flex flex-col min-h-[40vw]">
            <AHGLogo color="blackColor" />
            <span class="text-[1.6vw] 2xl:text-[26px] mt-8">Digital Body Scales</span>
            <img src="~/assets/images/Body-Scale.png" alt="Body Scale" class="my-auto w-full max-w-[15vw] max-h-[15vw] object-contain img-shadow">
            <AHGButton class="ml-auto" color="black" is-show-more>
              <span>Learn More</span>
            </AHGButton>
          </div>
          <div class="bg-[#E1E9ED] rounded-[30px] px-10 py-14 flex flex-col min-h-[40vw]">
            <AHGLogo color="blackColor" />
            <span class="text-[1.6vw] 2xl:text-[26px] mt-8">Digital Thermometer</span>
            <img src="~/assets/images/Thermometer.png" alt="Thermometer" class="my-auto w-full max-w-[15vw] max-h-[15vw] object-contain img-shadow">
            <AHGButton class="ml-auto" color="black" is-show-more>
              <span>Learn More</span>
            </AHGButton>
          </div>
        </div>
      </div>
    </div>
    <div class="py-[100px]"></div>
    <div class="bg-white py-[5vw] relative">
      <div class="container mx-auto flex flex-col">
        <h2 class="text-[8vw] z-10 leading-[1.2]" style="text-shadow: 2px 2px 5px #92A1A8">
          Affordable <br>
          luxury <br>
          packaging
        </h2>
        <p class="text-[2vw] z-10 mt-4 max-w-[60%] 2xl:text-[30px]">
          American Health Gate's exclusive packing, setting <br>
          a new standard a unique blend of luxury and quality.
        </p>
        <div class="absolute right-0 top-1/2 -translate-y-1/2">
          <img src="~/assets/images/affordable-packaging.png" alt="Affordable Packaging" class="max-w-[55vw]">
          <span class="absolute text-[2.5vw] top-0 right-1/4">
            Lifetime <br>
            International Warranty
          </span>
        </div>
      </div>
    </div>
    <div class="w-full min-h-[800px] py-[100px] flex items-center justify-center" style="background-image: url('/images/ai-banner.png'); background-color: #1A1B1D; background-size: cover; background-repeat: no-repeat;">
      <div class="mx-auto container flex flex-col text-white">
        <h3 class="text-[114px] leading-tight relative z-10" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.4)">
          Experience <br>
          the Difference
        </h3>
        <span class="text-[36px] mt-5">
          Setting a new standard with reliable  <br>
          healthcare products for an improved experience.
        </span>
      </div>
    </div>

    <AHGSupport />
   <AHGDistribution />
  </div>
</template>


<style scoped>
.img-shadow{
  filter:drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
}
</style>