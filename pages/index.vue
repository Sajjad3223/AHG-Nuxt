<template>
  <div>
    <div class="relative w-full grid place-items-center">
      <div class="relative flex justify-center items-center w-full h-[90vh] " style="background-image: url(/images/HomeBanner.jpg);background-size: cover">
        <div class="container mx-auto">
          <p class="text-[8vw] text-white leading-[1] 2xl:leading-tight" style="text-shadow: 4px 4px 5px rgba(126,133,144,0.5)">
            Seizing <br>
            the future <br>
            of <span class="text-blackColor">Healthcare</span>
          </p>
          <p class="text-[1.6vw] mt-4">
            Crafting beloved technology at AHG, where better <br>
            health seamlessly integrates into daily living.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[8vw] flex flex-col items-stretch">
        <p class="text-[1.6vw]">
          American Health Gate is at the forefront of healthcare technology, offering advanced devices <br>
          such as Digital Blood Glucose Monitors, Digital Blood Pressure Monitor, <br>
          Digital Thermometer and Digital Body Scale.
        </p>
        <p class="mt-4 text-[1.6vw]">Redefining healthcare innovation for improved outcomes and a modern patient experience. </p>
        <h2 class="my-8 text-[3.2vw]">
          Our Healthcare Products Range
        </h2>
        <div class="border border-white rounded-[30px] h-[20vw] min-h-[400px] flex items-center justify-between relative px-14">
          <div class="flex flex-col space-y-12">
            <h4 class="text-[3vw]">
              BLOOD PRESSURE MONITORS
            </h4>
            <p class="text-[1.2vw]">
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
        <div class="border border-white rounded-[30px] h-[20vw] mt-5 min-h-[400px] flex items-center justify-between relative px-14">
          <div class="flex flex-col space-y-12">
            <h4 class="text-[3vw] text-nowrap">
              BLOOD GLUCOSE MONITORS
            </h4>
            <p class="text-[1.2vw]">
              Empower yourself with easy and accurate blood sugar <br>
              checks using a meter personalized <br>
              to enhance your lifestyle.
            </p>
            <AHGButton color="white" is-show-more>
              <span>Discover all BG monitors</span>
            </AHGButton>
          </div>
          <div class="flex absolute right-10 items-center gap-5">
            <img src="~/assets/images/Blood-Glucose2.png" class="max-w-[270px] img-shadow object-contain bottom-0 mx-auto" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose4.png" class="max-h-[270px] img-shadow mx-auto" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose3.png" class="max-w-[140px] img-shadow mx-auto absolute bottom-1/2 translate-y-full left-1/4" alt="Blood Pressure"/>
          </div>
        </div>
        <h3 class="text-[3vw] text-center my-[70px]">
          Experience AHG's devices – they're not just tools; <br>
          they're seamlessly integrated into your lifestyle.
        </h3>
        <div class="grid grid-cols-2 gap-7">
          <div class="border border-white rounded-[30px] min-h-[520px] flex items-stretch justify-between relative px-8 py-16">
            <div class="flex flex-col h-full">
              <h4 class="text-[2.8vw] 2xl:text-[50px]">
                DIGITAL BODY SCALES
              </h4>
              <p class="my-12">
                The scale does not only measure weight, but gives you <br>
                the full body composition so that you know <br>
                more about your health.
              </p>
              <AHGButton color="white" is-show-more class="mt-auto">
                <span>Discover all Body Scales</span>
              </AHGButton>
            </div>
            <img src="~/assets/images/Body-Scale2.png" class="absolute w-2/5 max-w-[270px] object-contain img-shadow bottom-1/2 translate-y-[80%] right-12" alt="Body Scale"/>
          </div>
          <div class="border border-white rounded-[30px] min-h-[520px] flex items-stretch justify-between relative px-8 py-16">
            <div class="flex flex-col h-full">
              <h4 class="text-[2.8vw] 2xl:text-[50px]">
                DIGITAL THERMOMETERS
              </h4>
              <p class="my-12 2xl:max-w-[50%]">
                Effortlessly track the body temperature of your loved ones <br>
                while seamlessly measuring room temperature and <br>
                surface temperatures.
              </p>
              <AHGButton color="white" is-show-more class="mt-auto">
                <span>Discover all Thermometers</span>
              </AHGButton>
            </div>
            <img src="~/assets/images/Thermometer.png" class="absolute w-1/6 object-contain img-shadow bottom-0 right-1/4 translate-x-12 -rotate-45" alt="Body Scale"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-lightColor py-[5vw] relative">
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

    <AHGSupport />
    <AHGDistribution />
  </div>
</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
</script>

<style scoped>
.img-shadow{
 filter:drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
}
</style>