<template>
  <div>
    <div class="relative w-full grid place-items-center">
      <div class="relative flex justify-center lg:items-center w-full h-[60vh] lg:h-[90vh] pt-8">
        <img src="/images/homeBanner-2.jpg"
          class="absolute object-cover  -z-[1] bottom-0 right-0 w-full h-full lg:h-auto lg:-bottom-5" />

        <div class="container mx-auto">
          <p class="text-3xl font-semibold  text-white leading-[1] lg:max-w-[60%]"
            style="text-shadow: 4px 1px 4px rgb(0 0 0 / 30%)">
            Seizing <br>
            the future<br>
            of <span class="text-blackColor">Healthcare</span>
          </p>
          <p class="text-[25px] md:text-[34px] mt-7 max-w-[90%] md:max-w-[60%]">
            Crafting beloved technology at AHG, where better
            health seamlessly integrates into daily living.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[8vw] flex flex-col ">
        <p class="text-[26px] font-normal text-justify">
          American Health Gate is at the forefront of healthcare technology, offering advanced devices
          such as Digital Blood Glucose Monitors, Digital Blood Pressure Monitor, Digital Thermometer
          and Digital Body Scale.
        </p>
        <p class="mt-5 text-[26px]">Redefining healthcare innovation for improved outcomes and a modern patient
          experience. </p>
        <h2 class="mb-8 mt-12 text-xl font-bold">
          Our Healthcare Products Range
        </h2>
        <div class="border mt-5 border-white rounded-[30px]
           p-8 lg:p-12 flex flex-col-reverse gap-5 md:flex-row items-center justify-between relative">
          <div class="flex flex-col space-y-5 lg:space-y-12">
            <h4 class="text-lg text-nowrap">
              BLOOD PRESSURE MONITORS
            </h4>
            <p class="md:text-[20px] text-[15px]">
              Our advanced technology ensures precise readings, providing <br>
              you with the confidence and information <br>
              you need to stay healthy.
            </p>
            <AHGButton color="white" is-show-more class="show-more">
              Discover all BP monitors
            </AHGButton>
          </div>
          <img src="~/assets/images/Blood-Pressure.png" class="h-[20vw] max-h-[270px] img-shadow mx-auto"
            alt="Blood Pressure" />
        </div>
        <div class="border border-white rounded-[30px] mt-5 p-8 
          lg:p-12 flex flex-col-reverse gap-5 md:flex-row items-center justify-between relative">
          <div class="flex flex-col space-y-5 lg:space-y-12">
            <h4 class="text-lg text-nowrap">
              BLOOD GLUCOSE MONITORS
            </h4>
            <p class="md:text-[20px] text-[15px]">
              Empower yourself with easy and accurate blood sugar <br>
              checks using a meter personalized <br>
              to enhance your lifestyle.
            </p>
            <AHGButton color="white" is-show-more class="show-more">
              Discover all BG monitors
            </AHGButton>
          </div>
          <div class="hidden lg:flex absolute right-10 max-w-[50%] items-center gap-5">
            <img src="~/assets/images/Blood-Glucose2.png"
              class="w-[50%] max-w-[270px] img-shadow object-contain bottom-0 mx-auto" alt="Blood Pressure" />
            <img src="~/assets/images/Blood-Glucose4.png" class="w-[50%] max-h-[270px] img-shadow mx-auto"
              alt="Blood Pressure" />
            <img src="~/assets/images/Blood-Glucose3.png"
              class="w-[30%] max-w-[140px] img-shadow mx-auto absolute bottom-1/2 translate-y-full left-1/4"
              alt="Blood Pressure" />
          </div>
          <div class="flex lg:hidden w-[90%] items-center gap-4 relative">
            <img src="~/assets/images/Blood-Glucose2.png" class="w-1/2 img-shadow object-contain"
              alt="Blood Pressure" />
            <img src="~/assets/images/Blood-Glucose4.png" class="max-h-[100px] object-contain w-1/2 img-shadow"
              alt="Blood Pressure" />
            <img src="~/assets/images/Blood-Glucose3.png"
              class="max-w-[50px] img-shadow mx-auto absolute bottom-1/2 translate-y-full left-1/4"
              alt="Blood Pressure" />
          </div>
        </div>
        <h3 class="text-lg text-center my-[70px]">
          Experience AHG's devices – they're not just tools; <br>
          they're seamlessly integrated into your lifestyle.
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-7">
          <div class="border border-white h-full
             xl:max-h-[550px] rounded-[30px] flex flex-col items-stretch justify-between relative p-8
              lg:px-8 xl:py-12">
            <div class="flex flex-col">
              <h4 class="text-lg">
                DIGITAL BODY SCALES
              </h4>
              <div class="my-5 lg:mt-10 lg:mb-0 text-tiny max-w-[90%] font-light">
                The scale does not only measure weight, but gives you<br />
                the full body composition so that you know<br />
                more about your health.
              </div>
            </div>
            <div class="flex flex-col-reverse xl:flex-row items-center relative xl:gap-5 flex-1">
              <AHGButton color="white" is-show-more class="w-1/2 show-more xl:-translate-y-8">
                <span>Discover all Body Scales</span>
              </AHGButton>
              <div class="max-w-[284px] max-h-[250px] my-auto">
                <img src="~/assets/images/Body-Scale2.png" class="w-full scale-75 xl:scale-90 " alt="Body Scale" />
              </div>
            </div>
          </div>
          <div class="border border-white h-full xl:max-h-[550px] rounded-[30px] 
            flex flex-col items-stretch justify-between relative p-8 lg:px-8 xl:py-12">
            <div class="flex flex-col">
              <h4 class="text-lg">
                DIGITAL THERMOMETERS
              </h4>
              <p class="my-5 lg:mt-10 lg:mb-0 text-tiny max-w-[90%] font-light">
                Effortlessly track the body temperature of your loved ones
                while seamlessly measuring room temperature and
                surface temperatures.
              </p>
            </div>
            <div class="flex flex-col-reverse xl:flex-row  lg:justify-start items-center relative xl:gap-5 flex-1">
              <AHGButton color="white" is-show-more class="w-1/2 show-more xl:-translate-y-8">
                <span>Discover all Thermometers</span>
              </AHGButton>
              <div class="w-[367x] max-h-[245px] mx-auto my-auto">
                <img src="~/assets/images/Thermometer.png"
                  class="w-[367x] h-[350px] -rotate-45 -translate-y-12 scale-75 xl:scale-90" alt="Body Scale" />
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
@media screen and (max-width:768px) {
  .show-more {
    width: 100% !important;
    justify-content: space-between;
  }
}

.img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
</style>