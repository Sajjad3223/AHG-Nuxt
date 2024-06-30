<template>
  <div>
    <div class="relative w-full grid place-items-center">
      <div class="relative flex justify-center lg:items-center w-full h-[60vh] lg:h-[90vh] pt-8"
           style="background-image: url(/images/HomeBanner.jpg);background-size: cover;background-repeat: no-repeat;background-position: 80% 50%">
        <div class="container mx-auto">
          <p class="text-3xl text-white leading-[1] lg:max-w-[60%]" style="text-shadow: 5px 5px 7px rgba(126,133,144,0.7)">
            Seizing <br>
            the future <br>
            of <span class="text-blackColor">Healthcare</span>
          </p>
          <p class="text-base mt-4 max-w-[90%] md:max-w-[60%]">
            Crafting beloved technology at AHG, where better
            health seamlessly integrates into daily living.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[8vw] flex flex-col items-stretch">
        <p class="text-sm">
          American Health Gate is at the forefront of healthcare technology, offering advanced devices <br>
          such as Digital Blood Glucose Monitors, Digital Blood Pressure Monitor, <br>
          Digital Thermometer and Digital Body Scale.
        </p>
        <p class="mt-4 text-sm">Redefining healthcare innovation for improved outcomes and a modern patient experience. </p>
        <h2 class="my-8 text-xl">
          Our Healthcare Products Range
        </h2>
        <div class="border border-white rounded-[30px] p-8 lg:p-12 flex flex-col-reverse gap-5 md:flex-row items-center justify-between relative">
          <div class="flex flex-col space-y-5 lg:space-y-12">
            <h4 class="text-lg text-nowrap">
              BLOOD PRESSURE MONITORS
            </h4>
            <p class="text-small">
              Our advanced technology ensures precise readings, providing <br>
              you with the confidence and information <br>
              you need to stay healthy.
            </p>
            <AHGButton color="white" is-show-more>
              <span>Discover all BP monitors</span>
            </AHGButton>
          </div>
          <img src="~/assets/images/Blood-Pressure.png" class="h-[20vw] max-h-[270px] img-shadow mx-auto" alt="Blood Pressure"/>
        </div>
        <div class="border border-white rounded-[30px] mt-5 p-8 lg:p-12 flex flex-col-reverse gap-5 md:flex-row items-center justify-between relative">
          <div class="flex flex-col space-y-5 lg:space-y-12">
            <h4 class="text-lg text-nowrap">
              BLOOD GLUCOSE MONITORS
            </h4>
            <p class="text-small">
              Empower yourself with easy and accurate blood sugar <br>
              checks using a meter personalized <br>
              to enhance your lifestyle.
            </p>
            <AHGButton color="white" is-show-more>
              <span>Discover all BG monitors</span>
            </AHGButton>
          </div>
          <div class="hidden lg:flex absolute right-10 max-w-[50%] items-center gap-5">
            <img src="~/assets/images/Blood-Glucose2.png" class="w-[50%] max-w-[270px] img-shadow object-contain bottom-0 mx-auto" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose4.png" class="w-[50%] max-h-[270px] img-shadow mx-auto" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose3.png" class="w-[30%] max-w-[140px] img-shadow mx-auto absolute bottom-1/2 translate-y-full left-1/4" alt="Blood Pressure"/>
          </div>
          <div class="flex lg:hidden w-[90%] items-center gap-4 relative">
            <img src="~/assets/images/Blood-Glucose2.png" class="w-1/2 img-shadow object-contain" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose4.png" class="max-h-[100px] object-contain w-1/2 img-shadow" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose3.png" class="max-w-[50px] img-shadow mx-auto absolute bottom-1/2 translate-y-full left-1/4" alt="Blood Pressure"/>
          </div>
        </div>
        <h3 class="text-lg text-center my-[70px]">
          Experience AHG's devices – they're not just tools; <br>
          they're seamlessly integrated into your lifestyle.
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div class="border border-white rounded-[30px] flex items-stretch justify-between relative p-8 lg:px-8 lg:py-16">
            <div class="flex flex-col">
              <h4 class="text-lg ">
                DIGITAL BODY SCALES
              </h4>
              <p class="my-5 lg:my-12 text-small max-w-[80%]">
                The scale does not only measure weight, but gives you
                the full body composition so that you know
                more about your health.
              </p>
              <div class="flex flex-col-reverse xl:flex-row justify-between lg:justify-around h-full items-center relative gap-5">
                <AHGButton color="white" is-show-more class="w-1/2">
                  <span>Discover all Body Scales</span>
                </AHGButton>
                <div class="max-w-[284px] max-h-[245px]" >
                  <img src="~/assets/images/Body-Scale2.png" class="w-full scale-75" alt="Body Scale"/>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-white rounded-[30px] flex items-stretch justify-between relative p-8 lg:px-8 lg:py-16">
            <div class="flex flex-col">
              <h4 class="text-lg">
                DIGITAL THERMOMETERS
              </h4>
              <p class="my-5 lg:my-12 text-small max-w-[80%]">
                Effortlessly track the body temperature of your loved ones
                while seamlessly measuring room temperature and
                surface temperatures.
              </p>
              <div class="flex flex-col-reverse xl:flex-row justify-between lg:justify-around h-full items-center relative gap-5">
                <AHGButton color="white" is-show-more class="w-1/2">
                  <span>Discover all Thermometers</span>
                </AHGButton>
                <div class="w-[367x] h-[350px]" >
                  <img src="~/assets/images/Thermometer.png" class="w-[367x] h-[350px] -rotate-45 scale-75" alt="Body Scale"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AHGPackaging />
    <AHGSupport />
    <AHGDistribution />
  </div>
</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGPackaging from "~/components/AHGPackaging.vue";
</script>

<style scoped>
.img-shadow{
 filter:drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
}
</style>