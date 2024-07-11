<template>
  <div class="flex flex-col">
    <div class="w-full bg-blackColor flex items-baseline pt-5 md:pt-0 md:items-center justify-center h-[90vh] md:pb-[150px] pb-0 text-white">
      <div class="flex flex-col gap-5 lg:gap-0 container mx-auto relative">
        <span class="text-small">American Health Gate Solutions</span>
        <h1 class="text-xl font-bold lg:my-5 leading-tight text-left md:text-justify lg:max-w-[70%]"
          style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
          Delivering healthcare products <br class="hidden lg:block">
          that redefine your experience.
        </h1>
        <span
          class="text-[23px] text-justify leading-tight  lg:max-w-[60%] xl:max-w-[43%]  min-[1618px]:!max-w-[50%] min-[1618px]:text-[27px]">
          Backed by a decade of experience, AHG is dedicated
          to developing the most advanced healthcare devices.
          Partner with us to shape the future.
        </span>
        <img src="~/assets/images/landing-banner.png" alt="Landing Banner"
          class="lg:absolute right-16 min-[1600px]:-right-[4%] min-[1600px]:-bottom-[70%] -bottom-[70%] img-shadow w-[60vw] md:w-[35vw] self-center max-w-[600px]" />
      </div>
    </div>
    <div class="bg-lightColor py-[100px] w-full flex items-center justify-center">
      <div class="flex flex-col mx-auto container">
        <h4 class="self-center font-bold text-xl">
          Why choose American Health Gate?
        </h4>
        <div class="w-full flex flex-col mt-[80px]">
          <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8 gap-x-28">
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
            <div
              class="bg-blackColor w-full py-8 rounded-[8px] text-base col-span-full max-w-[650px] text-white grid place-items-center">
              Competitive pricing
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-[100px] flex justify-center items-center">
      <div class="flex flex-col container mx-auto">
        <h3 class="text-xl font-bold">AHG Healthcare Products</h3>
        <span class="text-[30px] w-[94%] mt-2 md:mt-12">
          Step into our ecosystem of smart devices, shedding light on your health and fostering lasting improvements.
        </span>
        <div class="mt-8 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3  w-full mx-auto">
          <div class="bg-lightColor rounded-[30px] px-5 py-10  flex flex-col  gap-4">
            <AHGLogo color="blackColor" width="9vw" />
            <span class="text-tiny">Blood Pressure Monitors</span>
            <img src="~/assets/images/Blood-Pressure.png" alt="Blood Pressure"
              class="w-2/3 h-[250px] lg:w-full object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem"
                py="0.5rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem"
                text-size="0.8rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
          </div>
          <div class="bg-lightColor rounded-[30px] px-5 py-10 flex flex-col  gap-4">
            <AHGLogo color="blackColor" width="9vw" />
            <span class="text-tiny">Blood Glucose Monitors</span>
            <img src="~/assets/images/Blood-Glucose.png" alt="Blood Glucose"
              class="w-2/3 h-[250px] lg:w-full object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem"
                py="0.5rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem"
                text-size="0.8rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
          </div>
          <div class="bg-lightColor rounded-[30px] px-5 py-10 flex flex-col  gap-4">
            <AHGLogo color="blackColor" width="9vw" />
            <span class="text-tiny">Digital Body Scales</span>
            <img src="~/assets/images/Body-Scale.png" alt="Body Scale"
              class="w-2/3 lg:w-full h-[250px] object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem"
                py="0.5rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem"
                text-size="0.8rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
          </div>
          <div class="bg-lightColor rounded-[30px] px-5 py-10 flex flex-col  gap-4">
            <AHGLogo color="blackColor" width="9vw" />
            <span class="text-tiny">Digital Thermometer</span>
            <img src="~/assets/images/Thermometer.png" alt="Thermometer"
              class=" lg:w-full  h-[250px] object-contain img-shadow">
            <div class="hidden lg:block">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="max-content" px="1rem"
                py="0.5rem" text-size="1.5rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
            <div class="lg:hidden">
              <BaseAHGButton class="text-tiny ml-auto mt-4" color="black" is-show-more width="100%" py="0.5rem"
                text-size="0.8rem">
                <span>Learn More</span>
              </BaseAHGButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AHGPackaging color="white" />
    <div class="w-full lg:min-h-[800px] py-[100px] flex items-center justify-center"
      style="background-image: url('/images/ai-banner.png'); background-color: #1A1B1D; background-size: cover; background-repeat: no-repeat; background-position: 80% 50%">
      <div class="mx-auto container flex flex-col text-white">
        <h3 class="text-3xl font-bold leading-tight relative z-10" style="text-shadow: 5px 5px 5px rgba(0,0,0,0.4)">
          Experience <br>
          the Difference
        </h3>
        <span class="text-base mt-5">
          Setting a new standard with reliable <br>
          healthcare products for an improved experience.
        </span>
      </div>
    </div>

    <AHGSupport manual-button />
    <AHGDistribution />
  </div>
</template>


<style scoped>
.img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
</style>
<script setup lang="ts">
import AHGPackaging from "~/components/AHGPackaging.vue";
</script>