<template>
  <div class="flex flex-col">
    <div class="w-full bg-blackColor flex items-center justify-center py-[100px] lg:py-[200px] text-white">
      <div class="flex flex-col gap-5 lg:gap-0 container mx-auto relative">
        <span class="text-small">American Health Gate Solutions</span>
        <h1 class="text-xl lg:my-5 leading-tight lg:max-w-[65%]" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
          Delivering healthcare products
          that redefine your experience.
        </h1>
        <span class="text-sm leading-tight text-justify lg:max-w-[50%]">
          Backed by a decade of experience, AHG is dedicated
          to developing the most advanced healthcare devices.
          Partner with us to shape the future.
        </span>
        <img src="~/assets/images/landing-banner.png" alt="Landing Banner"
        class="lg:absolute right-16 2xl:right-0 -bottom-1/2 img-shadow w-[60vw] lg:w-[40vw] self-center max-w-[600px]"/>
      </div>
    </div>
    <div class="bg-lightColor py-[100px] w-full flex items-center justify-center">
      <div class="flex flex-col mx-auto container">
        <h4 class="self-center text-xl">
          Why choose American Health Gate?
        </h4>
        <div class="w-full flex flex-col mt-[100px]">
          <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8 gap-x-16">
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-base text-white grid place-items-center">
              Cutting-edge healthcare devices
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-base text-white grid place-items-center">
              Affordable luxury packaging
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-base text-white grid place-items-center">
              Connected healthcare options
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-base text-white grid place-items-center">
              Lifetime international warranty
            </div>
            <div class="bg-blackColor w-full py-8 rounded-[8px] text-base col-span-full max-w-[650px] text-white grid place-items-center">
              Competitive pricing
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-[100px] flex justify-center items-center">
      <div class="flex flex-col container mx-auto">
        <h3 class="text-xl">AHG Healthcare Products</h3>
        <span class="text-base mt-12">
          Step into our ecosystem of smart devices, shedding light on your health and fostering lasting improvements.
        </span>
        <div class="mt-8 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:-mx-20">
          <div class="bg-lightColor rounded-[30px] p-6 lg:px-10 lg:py-14 flex flex-col min-h-[40vw] gap-4">
            <AHGLogo color="blackColor" width="9vw"/>
            <span class="text-small lg:mt-8">Blood Pressure Monitors</span>
            <img src="~/assets/images/Blood-Pressure.png" alt="Blood Pressure" class="m-auto w-2/3 lg:w-full object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem" py="0.8rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem" text-size="0.8rem">
              <span>Learn More</span>
            </BaseAHGButton>
            </div>
          </div>
          <div class="bg-lightColor rounded-[30px] p-6 lg:px-10 lg:py-14 flex flex-col min-h-[40vw] gap-4">
            <AHGLogo color="blackColor" width="9vw"/>
            <span class="text-small lg:mt-8">Blood Glucose Monitors</span>
            <img src="~/assets/images/Blood-Glucose.png" alt="Blood Glucose" class="m-auto w-2/3 lg:w-full object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem" py="0.8rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem" text-size="0.8rem">
              <span>Learn More</span>
            </BaseAHGButton>
            </div>
          </div>
          <div class="bg-lightColor rounded-[30px] p-6 lg:px-10 lg:py-14 flex flex-col min-h-[40vw] gap-4">
            <AHGLogo color="blackColor" width="9vw"/>
            <span class="text-small lg:mt-8">Digital Body Scales</span>
            <img src="~/assets/images/Body-Scale.png" alt="Body Scale" class="m-auto w-2/3 lg:w-full scale-125 object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem" py="0.8rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem" text-size="0.8rem">
              <span>Learn More</span>
            </BaseAHGButton>
            </div>
          </div>
          <div class="bg-lightColor rounded-[30px] p-6 lg:px-10 lg:py-14 flex flex-col min-h-[40vw] gap-4">
            <AHGLogo color="blackColor" width="9vw"/>
            <span class="text-small lg:mt-8">Digital Thermometer</span>
            <img src="~/assets/images/Thermometer.png" alt="Thermometer" class="m-auto w-full max-h-[20vw] object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem" py="0.8rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem" text-size="0.8rem">
              <span>Learn More</span>
            </BaseAHGButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AHGPackaging color="white" />
    <div class="w-full lg:min-h-[800px] py-[100px] flex items-center justify-center" style="background-image: url('/images/ai-banner.png'); background-color: #1A1B1D; background-size: cover; background-repeat: no-repeat; background-position: 80% 50%">
      <div class="mx-auto container flex flex-col text-white">
        <h3 class="text-3xl leading-tight relative z-10" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.4)">
          Experience <br>
          the Difference
        </h3>
        <span class="text-base mt-5">
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
<script setup lang="ts">
import AHGPackaging from "~/components/AHGPackaging.vue";
</script>